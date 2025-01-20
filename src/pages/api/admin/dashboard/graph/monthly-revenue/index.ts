import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// Função para obter o valor vendido por mês
const getMonthlyRevenue = async () => {
  const sales = await prisma.sale.findMany({
    select: {
      value: true,
      createdAt: true,
    },
  });

  const revenueByMonth = sales.reduce((acc, sale) => {
    const month = new Date(sale.createdAt).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += sale.value;
    return acc;
  }, {});

  return revenueByMonth;
};

// Função handler da API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Verifica se o método é GET
    if (req.method === "GET") {
      // Obtém os dados do dashboard
      const dashboardData = await getMonthlyRevenue();
      // Retorna os dados com status 200
      res.status(200).json(dashboardData);
    } else {
      // Método não permitido
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    // Em caso de erro, retorna status 500
    res.status(500).json({
      message: "Erro interno do servidor",
      error: (error as Error).message,
    });
  }
};

export default handler;
