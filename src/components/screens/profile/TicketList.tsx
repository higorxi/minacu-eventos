'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'

interface Ticket {
  id: number;
  event: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  user: {
    name: string;
    photo: string;
  };
  seat: string;
  status: "ativo" | "usado" | "expirado";
}

const tickets: Ticket[] = [
  {
    id: 1,
    event: "Show de Rock",
    date: "2023-07-15",
    time: "20:00",
    venue: "Estádio do Morumbi",
    price: "R$ 150,00",
    user: { name: "João Silva", photo: "/user1.jpg" },
    seat: "Setor A - Fila 3 - Assento 12",
    status: "ativo",
  },
  {
    id: 2,
    event: "Peça de Teatro",
    date: "2023-08-01",
    time: "19:30",
    venue: "Teatro Municipal",
    price: "R$ 80,00",
    user: { name: "Maria Oliveira", photo: "/user2.jpg" },
    seat: "Plateia - Fila 1 - Assento 5",
    status: "usado",
  },
  {
    id: 3,
    event: "Partida de Futebol",
    date: "2023-08-10",
    time: "16:00",
    venue: "Arena Corinthians",
    price: "R$ 120,00",
    user: { name: "Carlos Santos", photo: "/user3.jpg" },
    seat: "Arquibancada - Setor B - Assento 45",
    status: "expirado",
  },
]

export default function TicketList() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-bold text-gray-800">Seus Ingressos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <div 
            key={ticket.id} 
            className={`relative bg-white border rounded-lg shadow-md p-4 flex flex-col justify-between ${
              ticket.status === "usado" ? "opacity-80" : ticket.status === "expirado" ? "bg-red-100" : ""
            }`}
          >
            {/* Flag de status */}
            {ticket.status !== "ativo" && (
              <span
                className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${
                  ticket.status === "usado" ? "bg-yellow-400 text-gray-800" : "bg-red-500 text-white"
                }`}
              >
                {ticket.status === "usado" ? "Usado" : "Expirado"}
              </span>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-700">{ticket.event}</h3>
              <p className="text-gray-600"><strong>Data:</strong> {ticket.date}</p>
              <p className="text-gray-600"><strong>Hora:</strong> {ticket.time}</p>
              <p className="text-gray-600"><strong>Local:</strong> {ticket.venue}</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => setSelectedTicket(ticket)} 
                  className={`mt-4 ${
                    ticket.status === "ativo"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  disabled={ticket.status !== "ativo"}
                >
                  Visualizar Ingresso
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl p-0 rounded-lg">
                {selectedTicket && (
                  <div className="bg-white border rounded-lg shadow-md overflow-hidden">
                    {/* Cabeçalho do ticket */}
                    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                      <div>
                        <h4 className="text-lg font-bold">{selectedTicket.user.name}</h4>
                        <p className="text-sm">Entrada Pessoal e Intransferível</p>
                      </div>
                      <Image
                        src={selectedTicket.user.photo}
                        alt={selectedTicket.user.name}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                    {/* Informações do ticket */}
                    <div className="p-6">
                      <h5 className="text-2xl font-bold text-gray-800">{selectedTicket.event}</h5>
                      <p className="text-gray-600"><strong>Data:</strong> {selectedTicket.date}</p>
                      <p className="text-gray-600"><strong>Hora:</strong> {selectedTicket.time}</p>
                      <p className="text-gray-600"><strong>Local:</strong> {selectedTicket.venue}</p>
                      <p className="text-gray-600"><strong>Assento:</strong> {selectedTicket.seat}</p>
                      <p className="text-gray-600"><strong>Valor:</strong> {selectedTicket.price}</p>
                    </div>
                    {/* QR Code */}
                    <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-center">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="QR Code"
                        width={200}
                        height={200}
                        className="rounded-lg border"
                      />
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  )
}
