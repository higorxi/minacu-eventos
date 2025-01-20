import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod'; // Importando o zod para validação
import bcrypt from 'bcryptjs'; // Para hashing da senha

// Define a validação dos dados de entrada com zod
const companySchema = z.object({
  name: z.string().min(3, 'O nome da empresa deve ter no mínimo 3 caracteres'), // Valida o nome da empresa
  address: z.string().min(10, 'O endereço deve ter no mínimo 10 caracteres'), // Valida o endereço
  phone: z.string().min(10, 'O telefone deve ter no mínimo 10 caracteres'), // Valida o telefone
  email: z.string().email('Email inválido'), // Valida o email
  cnpj: z.string().length(14, 'CNPJ inválido, deve ter 14 caracteres'), // Valida o CNPJ
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'), // Valida a senha
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Valida os dados de entrada com zod
      const validatedData = companySchema.parse(req.body);

      const { name, address, phone, email, cnpj, password } = validatedData;

      // Verifica se a empresa já existe
      const existingCompany = await prisma.company.findUnique({
        where: { email },
      });

      if (existingCompany) {
        return res.status(400).json({ error: 'Company with this email already exists' });
      }

      // Verifica se o CNPJ já está cadastrado
      const existingCNPJ = await prisma.company.findUnique({
        where: { cnpj },
      });

      if (existingCNPJ) {
        return res.status(400).json({ error: 'Company with this CNPJ already exists' });
      }

      // Criptografa a senha antes de salvar
      const hashedPassword = await bcrypt.hash(password, 10);

      // Cria a empresa com a senha criptografada
      const company = await prisma.company.create({
        data: {
          name,
          address,
          phone,
          email,
          cnpj,
          password: hashedPassword, // Armazena a senha criptografada
        },
      });

      return res.status(200).json({ company });
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
