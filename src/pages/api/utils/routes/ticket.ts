import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Criar ticket
export const createTicket = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { userId, eventId, companyId, price, info } = req.body;

    const ticket = await prisma.ticket.create({
      data: {
        userId,
        eventId,
        companyId,
        price,
        info,
      },
    });

    res.status(201).json({ success: true, data: ticket });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

// Buscar todos os tickets
export const getAllTickets = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const tickets = await prisma.ticket.findMany({
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

// Buscar ticket por ID
export const getTicketById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;

  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: Number(id) },
      include: {
        user: true,
        event: true,
        company: true,
      },
    });

    if (!ticket) {
      res.status(404).json({ success: false, message: 'Ticket não encontrado' });
      return;
    }

    res.status(200).json({ success: true, data: ticket });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

// Atualizar ticket por ID
export const updateTicketById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;
  const { price, info } = req.body;

  try {
    const ticket = await prisma.ticket.update({
      where: { id: Number(id) },
      data: { price, info },
    });

    res.status(200).json({ success: true, data: ticket });
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};

// Deletar ticket por ID
export const deleteTicketById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;

  try {
    await prisma.ticket.delete({
      where: { id: Number(id) },
    });

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ success: false, message: (error as Error).message });
  }
};
