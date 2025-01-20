import { NextApiRequest, NextApiResponse } from "next";

// Função para os top 5 eventos (mockado)
const getTop5Events = async () => {
  // Mockando dados dos top 5 eventos
  return [
    { event: "Event A", sales: 10000 },
    { event: "Event B", sales: 9000 },
    { event: "Event C", sales: 8500 },
    { event: "Event D", sales: 7000 },
    { event: "Event E", sales: 6500 },
  ];
};

// Função handler da API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Verifica se o método é GET
    if (req.method === "GET") {
      // Obtém os dados do dashboard
      const dashboardData = await getTop5Events();
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
