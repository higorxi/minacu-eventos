import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { handleError } from '../../errors';

const prisma = new PrismaClient();

// Buscar configurações do usuário
export const getUserConfig = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'userId é obrigatório' });
  }

  try {
    const userConfig = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: { name: true, email: true, settings: true },
    });

    if (!userConfig) {
      return res.status(404).json({ success: false, message: 'Configuração do usuário não encontrada' });
    }

    res.status(200).json({ success: true, data: userConfig });
  } catch (error) {
    handleError(error, res);
  }
};

// Atualizar configurações do usuário
export const updateUserConfig = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { userId } = req.query;
  const { name, email, settings } = req.body;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'userId é obrigatório' });
  }

  try {
    const userConfig = await prisma.user.update({
      where: { id: Number(userId) },
      data: { name, email, settings },
    });

    res.status(200).json({ success: true, data: userConfig });
  } catch (error) {
    handleError(error, res);
  }
};

// Deletar conta do usuário
export const deleteUserAccount = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'userId é obrigatório' });
  }

  try {
    await prisma.user.delete({
      where: { id: Number(userId) },
    });

    res.status(204).end();
  } catch (error) {
    handleError(error, res);
  }
};
