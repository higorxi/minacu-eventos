'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Search, Music, Theater, Users } from 'lucide-react'

const categorias = [
  { value: "musica", label: "Música", icon: Music },
  { value: "teatro", label: "Teatro", icon: Theater },
  { value: "social", label: "Eventos Sociais", icon: Users },
]

export default function EventosPage() {
  const [filtroCategoria, setFiltroCategoria] = useState("")

  // Simulated events data
  const eventos = [
    { id: 1, nome: "Show de Rock", categoria: "musica", data: "15/08/2024", local: "Arena Minaçu" },
    { id: 2, nome: "Peça Teatral", categoria: "teatro", data: "20/08/2024", local: "Teatro Municipal" },
    { id: 3, nome: "Festa de Aniversário da Cidade", categoria: "social", data: "25/08/2024", local: "Praça Central" },
    { id: 4, nome: "Festival de Jazz", categoria: "musica", data: "30/08/2024", local: "Parque da Cidade" },
    { id: 5, nome: "Comédia Stand-up", categoria: "teatro", data: "05/09/2024", local: "Centro Cultural" },
    { id: 6, nome: "Feira Gastronômica", categoria: "social", data: "10/09/2024", local: "Avenida Principal" },
  ]

  const eventosFiltrados = filtroCategoria
    ? eventos.filter(evento => evento.categoria === filtroCategoria)
    : eventos

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Eventos em Minaçu</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <form className="flex-grow flex gap-2">
          <Input className="flex-grow" placeholder="Pesquisar eventos" type="text" />
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" /> Buscar
          </Button>
        </form>
        <Select value={filtroCategoria} onValueChange={setFiltroCategoria}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todas as categorias</SelectItem>
            {categorias.map(categoria => (
              <SelectItem key={categoria.value} value={categoria.value}>
                <div className="flex items-center">
                  <categoria.icon className="mr-2 h-4 w-4" />
                  {categoria.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventosFiltrados.map((evento) => (
          <Link href={`/eventos/${evento.id}`} key={evento.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <img
              alt={evento.nome}
              className="object-cover w-full h-48"
              height="192"
              src={`/placeholder.svg?height=192&width=384`}
              style={{
                aspectRatio: "384/192",
                objectFit: "cover",
              }}
              width="384"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{evento.nome}</h2>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{evento.data}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{evento.local}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button variant="outline">Carregar mais eventos</Button>
      </div>
    </div>
  )
}

