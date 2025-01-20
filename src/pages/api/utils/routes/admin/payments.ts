import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { handleError } from '../../errors';

const prisma = new PrismaClient();

// Criar um novo evento 
export const createEvent = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { name, date, location, description, companyId } = req.body;

    const event = await prisma.event.create({
      data: { name, date: new Date(date), location, description, companyId },
    });

    res.status(201).json({ success: true, data: event });
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


// Buscar todos os eventos vinculados à empresa

// ADICIONAR PARA PEGAR O COMPANY ID COM BASE NA REQUISIÇÃO

export const getEventsByCompany = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const companyId  = 123;

  if (!companyId) {
    return res.status(400).json({ success: false, message: 'companyId é obrigatório' });
  }

  try {
    const events = await prisma.event.findMany({
      where: { companyId: Number(companyId) },
    });

    res.status(200).json({ success: true, data: events });
  } catch (error) {
    handleError(error, res);
  }
};
