import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Helper para tratar erros
const handleError = (error: unknown, res: NextApiResponse) => {
  if (error instanceof Error) {
    res.status(400).json({ success: false, message: error.message });
  } else {
    res.status(400).json({ success: false, message: 'Ocorreu um erro desconhecido' });
  }
};

// Buscar todos os eventos
export const getAllEvents = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    handleError(error, res);
  }
};

// Buscar evento por ID
export const getEventById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;

  try {
    const event = await prisma.event.findUnique({
      where: { id: Number(id) },
    });

    if (!event) {
      res.status(404).json({ success: false, message: 'Evento não encontrado' });
      return;
    }

    res.status(200).json({ success: true, data: event });
  } catch (error) {
    handleError(error, res);
  }
};


// Buscar eventos em destaque
export const getFeaturedEvents = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const featuredEvents = await prisma.event.findMany({
      where: {
        isFeatured: true,
      },
    });
    res.status(200).json({ success: true, data: featuredEvents });
  } catch (error) {
    handleError(error, res);
  }
};
