import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Ticket = {
  id: number;
  name: string;
  price: number;
}

const tickets: Ticket[] = [
  { id: 1, name: "Ingresso Padrão", price: 50 },
  { id: 2, name: "Ingresso VIP", price: 100 },
  { id: 3, name: "Ingresso Backstage", price: 200 },
]

export function TicketSelection({ onNext }: { onNext: (selectedTickets: { [id: number]: number }) => void }) {
  const [selectedTickets, setSelectedTickets] = useState<{ [id: number]: number }>({})

  const updateTicketCount = (id: number, count: number) => {
    setSelectedTickets(prev => ({ ...prev, [id]: count }))
  }

  const totalPrice = Object.entries(selectedTickets).reduce((total, [id, count]) => {
    const ticket = tickets.find(t => t.id === Number(id))
    return total + (ticket ? ticket.price * count : 0)
  }, 0)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Selecione seus ingressos</h2>
      {tickets.map(ticket => (
        <div key={ticket.id} className="flex items-center justify-between">
          <Label htmlFor={`ticket-${ticket.id}`}>{ticket.name} - R${ticket.price.toFixed(2)}</Label>
          <Input
            id={`ticket-${ticket.id}`}
            type="number"
            min="0"
            value={selectedTickets[ticket.id] || 0}
            onChange={(e) => updateTicketCount(ticket.id, parseInt(e.target.value) || 0)}
            className="w-20"
          />
        </div>
      ))}
      <div className="text-right font-bold">Total: R${totalPrice.toFixed(2)}</div>
      <Button onClick={() => onNext(selectedTickets)} disabled={totalPrice === 0}>
        Próximo
      </Button>
    </div>
  )
}

