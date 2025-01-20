import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'; // Para verificar a senha criptografada
import { z } from 'zod'; // Para validação de entrada

// Define a validação dos dados de entrada com zod
const loginSchema = z.object({
  cpf: z.string().length(11, 'CPF inválido, deve conter 11 caracteres'), // Valida o CPF com 11 caracteres
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Valida os dados de entrada com zod
      const validatedData = loginSchema.parse(req.body);
      const { cpf, password } = validatedData;

      // Verifica se o usuário existe pelo CPF
      const user = await prisma.user.findUnique({
        where: { cpf },
      });

      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }

      // Verifica se a senha está correta
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Senha incorreta' });
      }

      // Retorna o usuário autenticado
      return res.status(200).json({ user });
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
