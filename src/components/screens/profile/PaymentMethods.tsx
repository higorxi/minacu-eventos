'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const savedCards = [
  { last4: "1234", brand: "Visa", expiry: "12/24" },
  { last4: "5678", brand: "Mastercard", expiry: "06/25" },
]

export default function PaymentMethods() {
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Métodos de Pagamento</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Cartões Salvos</h3>
        {savedCards.map((card, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center">
              <CreditCard className="mr-2" />
              <span>**** **** **** {card.last4}</span>
            </div>
            <span>{card.brand} - Expira em {card.expiry}</span>
            <Button variant="ghost">Remover</Button>
          </div>
        ))}
        <Dialog open={isAddCardModalOpen} onOpenChange={setIsAddCardModalOpen}>
          <DialogTrigger asChild>
            <Button>Adicionar Novo Cartão</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Cartão</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Número do Cartão</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="expiry">Data de Expiração</Label>
                  <Input id="expiry" placeholder="MM/AA" />
                </div>
                <div className="flex-1">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <Button type="submit" onClick={() => setIsAddCardModalOpen(false)}>Adicionar Cartão</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

