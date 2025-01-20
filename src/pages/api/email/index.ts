import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import validator from 'validator';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email } = req.body as { email: string };

    // Validando o email
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: 'Email inválido' });
    }

    // Normalizando o email
    const normalizedEmail = validator.normalizeEmail(email.trim()) as string;

    // Verificando se o email já está cadastrado
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingSubscriber) {
      return res.status(409).json({ success: false, message: 'Email já cadastrado' });
    }

    // Salvando o email no banco de dados
    await prisma.subscriber.create({
      data: { email: normalizedEmail },
    });

    return res.status(201).json({ success: true, message: 'Email cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error);

    // Respondendo com um erro genérico
    return res.status(500).json({
      success: false,
      message: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.',
    });
  }
}
