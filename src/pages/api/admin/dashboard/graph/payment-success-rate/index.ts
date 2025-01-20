import { NextApiRequest, NextApiResponse } from "next";

// Função para taxa de sucesso de pagamentos (mockado)
const getPaymentSuccessRate = async () => {
  // Mockando dados de taxa de sucesso de pagamentos
  const totalPayments = 200;
  const successfulPayments = 180;
  return (successfulPayments / totalPayments) * 100; // Retorna a taxa em porcentagem
};

// Função handler da API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Verifica se o método é GET
    if (req.method === "GET") {
      // Obtém os dados do dashboard
      const dashboardData = await getPaymentSuccessRate();
      // Retorna os dados com status 200
      res.status(200).json(dashboardData);
    } else {
      // Método não permitido
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    // Em caso de erro, retorna status 500
    res
      .status(500)
      .json({
        message: "Erro interno do servidor",
        error: (error as Error).message,
      });
  }
};

export default handler;
