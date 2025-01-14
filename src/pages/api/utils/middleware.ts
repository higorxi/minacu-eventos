import { NextApiRequest, NextApiResponse } from 'next';

export type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export function withMiddleware(handler: Handler): Handler {
  return async (req, res) => {
    try {
      
      /* Exemplo de autenticação
      const token = req.headers.authorization;

      if (!token || token !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ success: false, message: 'Acesso não autorizado' });
      }

      // Validação de métodos permitidos
      const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
      if (!allowedMethods.includes(req.method || '')) {
        return res.status(405).json({ success: false, message: 'Método não permitido' });
      }
      */

      // Continue para o handler
      await handler(req, res);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Erro interno do servidor', error: error.message });
    }
  };
}
