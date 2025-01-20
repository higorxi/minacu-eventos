import { NextApiRequest, NextApiResponse } from "next";

// Função para vendas por evento (mockado)
const getSalesByEvent = async () => {
  // Mockando dados de vendas por evento
  return [
    { event: "Concert 1", totalSales: 5000 },
    { event: "Concert 2", totalSales: 3000 },
    { event: "Concert 3", totalSales: 8000 },
  ];
};

// Função handler da API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Verifica se o método é GET
    if (req.method === "GET") {
      // Obtém os dados do dashboard
      const dashboardData = await getSalesByEvent();
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
