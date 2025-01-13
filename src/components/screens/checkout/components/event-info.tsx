import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type EventInfoProps = {
  event: {
    name: string
    date: string
    time: string
    location: string
  }
}

export function EventInfo({ event }: EventInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações do Evento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="font-semibold">{event.name}</p>
        <p>Data: {event.date}</p>
        <p>Horário: {event.time}</p>
        <p>Local: {event.location}</p>
        <p className="text-sm text-gray-500 mt-4">
          Traga sua pulseira de identificação recebida por e-mail. Não é permitida a entrada de bebidas e alimentos externos.
        </p>
      </CardContent>
    </Card>
  )
}

