"use client"

import { Checkout } from "@/components/screens/checkout/checkout"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

interface Event {
  id: string
  name: string
  date: string
  time: string
  location: string
  description: string
}

async function getEventDetails(id: string): Promise<Event> {
  return {
    id,
    name: "Festival de Música Verão 2023",
    date: "15 de Dezembro de 2023",
    time: "18:00 - 23:00",
    location: "Parque da Cidade",
    description: "Um incrível festival de música com os melhores artistas do momento."
  }
}

export default function CheckoutPage() {
  const router = useRouter()
  const { id } = router.query

  const [event, setEvent] = useState<Event | undefined>(undefined)

  useEffect(() => {
    if (id) {
      async function fetchEventDetails() {
        const eventData = await getEventDetails(id as string)
        setEvent(eventData)
      }
      fetchEventDetails()
    }
  }, [id])

  if (!event) {
    return <div>Carregando...</div>
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout - {event.name}</h1>
        <Checkout eventDetails={event} />
      </div>
    </main>
  )
}
