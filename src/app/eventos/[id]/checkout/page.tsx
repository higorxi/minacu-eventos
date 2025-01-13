import { Checkout } from "@/components/screens/checkout/checkout"
import { useParams } from "next/navigation"


async function getEventDetails(id: string) {
  return {
    id,
    name: "Festival de Música Verão 2023",
    date: "15 de Dezembro de 2023",
    time: "18:00 - 23:00",
    location: "Parque da Cidade",
    description: "Um incrível festival de música com os melhores artistas do momento."
  }
}

export default async function CheckoutPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();

  const event = await getEventDetails(id as string)

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout - {event.name}</h1>
        <Checkout eventDetails={event} />
      </div>
    </main>
  )
}
