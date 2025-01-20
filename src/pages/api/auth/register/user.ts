import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs'; // Para hashing da senha
import { z } from 'zod'; // Importando o zod para validação

// Define a validação dos dados de entrada com zod
const userSchema = z.object({
  email: z.string().email('Email inválido'), // Valida se o email é válido
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'), // Valida o comprimento mínimo da senha
  fullName: z.string().min(3, 'O nome completo deve ter no mínimo 3 caracteres'), // Valida o nome completo
  phone: z.string().optional(), // Valida o telefone (opcional)
  cpf: z.string().length(11, 'CPF inválido, deve conter 11 caracteres'), // Valida o CPF (11 caracteres)
  externalId: z.string().length(9, 'ID externo deve ter 9 caracteres no formato xxxx-xxxx'), // Valida o externalId
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Valida os dados de entrada com zod
      const validatedData = userSchema.parse(req.body);

      const { email, password, fullName, phone, cpf, externalId } = validatedData;

      // Verifica se o usuário já existe
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Criptografa a senha antes de salvar
      const hashedPassword = await bcrypt.hash(password, 10);

      // Cria o usuário com a senha criptografada
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword, // Armazena a senha criptografada
          fullName,
          phone,
          cpf,
          externalId,
        },
      });

      return res.status(200).json({ user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Caso a validação do zod falhe, retorna um erro com as mensagens de validação
        return res.status(400).json({ error: error.errors });
      }
      // Caso outro erro ocorra
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
