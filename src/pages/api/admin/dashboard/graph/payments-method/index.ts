import { NextApiRequest, NextApiResponse } from "next";

// Função para métodos de pagamento (mockado)
export const getPaymentMethods = async () => {
  // Mockando dados de métodos de pagamento
  return [
    { method: "Pix", count: 50 },
    { method: "Credit Card", count: 70 },
    { method: "Boleto", count: 30 },
  ];
};

// Função handler da API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Verifica se o método é GET
    if (req.method === "GET") {
      // Obtém os dados do dashboard
      const dashboardData = await getPaymentMethods();
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
