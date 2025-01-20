import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'; // Para verificar a senha criptografada
import { z } from 'zod'; // Para validação de entrada

// Define a validação dos dados de entrada com zod
const loginSchema = z.object({
  email: z.string().email('Email inválido'), // Valida o email da empresa
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Valida os dados de entrada com zod
      const validatedData = loginSchema.parse(req.body);
      const { email, password } = validatedData;

      // Verifica se a empresa existe pelo email
      const company = await prisma.company.findUnique({
        where: { email },
      });

      if (!company) {
        return res.status(400).json({ error: 'Empresa não encontrada' });
      }

      // Verifica se a senha está correta
      const isPasswordValid = await bcrypt.compare(password, company.password);

      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Senha incorreta' });
      }

      // Retorna uma mensagem personalizada para empresas
      return res.status(200).json({ company });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    return res.status(405).json({ error: 'Método não permitido' });
  }
}
