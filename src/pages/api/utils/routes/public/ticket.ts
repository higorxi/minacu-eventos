import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Buscar todos os tickets daquele usuario

// DEVE SER ALTERADO PARA BUSCAR APENAS OS TICKETS LIGADOS AO TOKEN DA REQUISIÇÃO
export const getAllTicketsForUser = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'userId é obrigatório' });
  }

  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        user: true,
        event: true,
        company: true,
      },
    });

    res.status(200).json({ success: true, data: tickets });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

