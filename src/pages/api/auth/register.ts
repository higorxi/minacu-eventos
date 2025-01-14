import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Cria o usuário
    const user = await prisma.user.create({
      data: {
        email,
        password, // Aqui você deve fazer o hash da senha antes de salvar no banco!
      },
    });

    return res.status(200).json({ user });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
