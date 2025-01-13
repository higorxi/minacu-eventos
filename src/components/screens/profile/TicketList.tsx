'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

// Defina o tipo para os ingressos
interface Ticket {
  id: number;
  event: string;
  date: string;
  time: string;
  venue: string;
}

// Lista de ingressos com o tipo Ticket
const tickets: Ticket[] = [
  { id: 1, event: "Show de Rock", date: "2023-07-15", time: "20:00", venue: "Estádio do Morumbi" },
  { id: 2, event: "Peça de Teatro", date: "2023-08-01", time: "19:30", venue: "Teatro Municipal" },
  { id: 3, event: "Partida de Futebol", date: "2023-08-10", time: "16:00", venue: "Arena Corinthians" },
]

export default function TicketList() {
  // Tipando o estado selectedTicket como Ticket ou null
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Seus Ingressos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <Card key={ticket.id}>
            <CardHeader>
              <CardTitle>{ticket.event}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Data:</strong> {ticket.date}</p>
              <p><strong>Hora:</strong> {ticket.time}</p>
              <p><strong>Local:</strong> {ticket.venue}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedTicket(ticket)}>Ver QR Code</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{selectedTicket?.event}</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="QR Code"
                      width={200}
                      height={200}
                    />
                    <p className="mt-4"><strong>Data:</strong> {selectedTicket?.date}</p>
                    <p><strong>Hora:</strong> {selectedTicket?.time}</p>
                    <p><strong>Local:</strong> {selectedTicket?.venue}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
