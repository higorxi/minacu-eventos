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

// Criar um novo evento
export const createEvent = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, date, location, description } = req.body;

    const event = await prisma.event.create({
      data: { name, date: new Date(date), location, description },
    });

    res.status(201).json({ success: true, data: event });
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

// Atualizar evento por ID
export const updateEventById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;
  const { name, date, location, description } = req.body;

  try {
    const event = await prisma.event.update({
      where: { id: Number(id) },
      data: { name, date: new Date(date), location, description },
    });

    res.status(200).json({ success: true, data: event });
  } catch (error) {
    handleError(error, res);
  }
};

// Deletar evento por ID
export const deleteEventById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { id } = req.query;

  try {
    await prisma.event.delete({
      where: { id: Number(id) },
    });

    res.status(204).end();
  } catch (error) {
    handleError(error, res);
  }
};
