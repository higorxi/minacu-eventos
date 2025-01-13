'use client'

import { useState } from 'react'
import { EventInfo } from './components/event-info'
import { OrderSummary } from './components/order-summary'
import { PaymentSection } from './components/payment-section'


type CheckoutProps = {
  id: string,
  name: string,
  date: string,
  time: string,
  location: string,
  description: string,
}

export function Checkout({ eventDetails }: { eventDetails: CheckoutProps}) {
  const [orderDetails, setOrderDetails] = useState({
    tickets: [
      { id: 1, name: "Ingresso Padrão", price: 50, quantity: 2 },
      { id: 2, name: "Ingresso VIP", price: 100, quantity: 1 },
    ],
    fees: 15,
    total: 215,
  })

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setOrderDetails(prev => ({
      ...prev,
      tickets: prev.tickets.map(ticket => 
        ticket.id === id ? { ...ticket, quantity: newQuantity } : ticket
      ),
    }))
  }

  if (!eventDetails) {
    return <div>Carregando...</div>
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <PaymentSection />
      </div>
      <div className="space-y-8">
        <OrderSummary 
          orderDetails={orderDetails}
          onQuantityChange={handleQuantityChange}
        />
        <EventInfo event={eventDetails} />
      </div>
    </div>
  )
}

