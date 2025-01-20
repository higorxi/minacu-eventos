import { NextApiResponse } from "next";

// Helper para tratar erros
export const handleError = (error: unknown, res: NextApiResponse) => {
  if (error instanceof Error) {
    res.status(400).json({ success: false, message: error.message });
  } else {
    res.status(400).json({ success: false, message: 'Ocorreu um erro desconhecido' });
  }
};