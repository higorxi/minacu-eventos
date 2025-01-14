import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'; // Adicionando o bcrypt para hashing da senha

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

    // Hash da senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário com a senha hashada
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword, // Armazenando a senha hashada
      },
    });

    return res.status(200).json({ user });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
