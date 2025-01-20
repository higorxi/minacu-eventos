// /pages/api/dashboard.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

// Função consolidada para obter todos os dados do dashboard
const getDashboardData = async () => {
  // Total de eventos
  const totalEvents = await prisma.event.count();

  // Total de ingressos vendidos
  const totalTicketsSold = await prisma.ticket.count();

  // Receita total
  const totalRevenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
  });
  const totalRevenueAmount = totalRevenue._sum.amount || 0;

  // Número de eventos ativos
  const activeEvents = await prisma.event.count({
    where: { status: 'active' }, // Supondo que 'active' seja o status de eventos ativos
  });

  // Retornar todos os dados em um objeto
  return {
    totalEvents,
    totalTicketsSold,
    totalRevenue: totalRevenueAmount,
    activeEvents,
  };
};

// Função handler da API
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Verifica se o método é GET
    if (req.method === 'GET') {
      // Obtém os dados do dashboard
      const dashboardData = await getDashboardData();
      // Retorna os dados com status 200
      res.status(200).json(dashboardData);
    } else {
      // Método não permitido
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    // Em caso de erro, retorna status 500
    res.status(500).json({ message: 'Erro interno do servidor', error: (error as Error).message });
  }
};

export default handler;
