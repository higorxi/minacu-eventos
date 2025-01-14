import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, address, phone, email } = req.body;

    // Verifica se a empresa já existe (pode ser pelo e-mail, por exemplo)
    const existingCompany = await prisma.company.findUnique({
      where: { email },
    });

    if (existingCompany) {
      return res.status(400).json({ error: 'Company already exists' });
    }

    // Cria a empresa
    const company = await prisma.company.create({
      data: {
        name,
        address,
        phone,
        email,
      },
    });

    return res.status(200).json({ company });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
