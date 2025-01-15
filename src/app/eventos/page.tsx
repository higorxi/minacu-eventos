"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Search, Music, Theater, Users, Lock, Globe, Ticket } from 'lucide-react';
import Footer from "@/components/footer";
import Image from "next/image";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { BasicEventData, TipoEvento } from "@/types/Events";

const categorias = [
  { value: "musica", label: "Música", icon: Music },
  { value: "teatro", label: "Teatro", icon: Theater },
  { value: "social", label: "Eventos Sociais", icon: Users },
];

export default function EventosPage() {
  const [filtroCategoria, setFiltroCategoria] = useState("");

  const eventos: BasicEventData[] = [
    {
      id: 1,
      nome: "Show de Rock",
      categoria: "musica",
      data: "15/08/2024",
      local: "Arena Minaçu",
      tipo: "publico",
    },
    {
      id: 2,
      nome: "Peça Teatral",
      categoria: "teatro",
      data: "20/08/2024",
      local: "Teatro Municipal",
      tipo: "particular",
    },
    {
      id: 3,
      nome: "Festa de Aniversário da Cidade",
      categoria: "social",
      data: "25/08/2024",
      local: "Praça Central",
      tipo: "publico",
    },
    {
      id: 4,
      nome: "Festival de Jazz",
      categoria: "musica",
      data: "30/08/2024",
      local: "Parque da Cidade",
      tipo: "particular",
    },
    {
      id: 5,
      nome: "Comédia Stand-up",
      categoria: "teatro",
      data: "05/09/2024",
      local: "Centro Cultural",
      tipo: "privado",
    },
    {
      id: 6,
      nome: "Feira Gastronômica",
      categoria: "social",
      data: "10/09/2024",
      local: "Avenida Principal",
      tipo: "publico",
    },
  ];

  const eventosFiltrados =
    filtroCategoria === "all" || !filtroCategoria
      ? eventos
      : eventos.filter((evento: { categoria: string; }) => evento.categoria === filtroCategoria);

  const getEventoBadge = (tipo: TipoEvento) => {
    switch (tipo) {
      case 'publico':
        return (
          <Badge variant="default">
            <Globe className="mr-1 h-3 w-3" />
            Público
          </Badge>
        );
      case 'privado':
        return (
          <Badge variant="secondary">
            <Lock className="mr-1 h-3 w-3" />
            Privado
          </Badge>
        );
      case 'particular':
        return (
          <Badge variant="outline">
            <Ticket className="mr-1 h-3 w-3" />
            Ingresso
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="container mx-auto px-4 py-8 flex-grow mt-16">
        <h1 className="text-3xl font-bold mb-8">Eventos em Minaçu</h1>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <form className="flex-grow flex gap-2">
            <Input
              className="flex-grow"
              placeholder="Pesquisar eventos"
              type="text"
            />
            <Button type="submit">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </form>
          <Select value={filtroCategoria} onValueChange={setFiltroCategoria}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              {categorias.map((categoria) => (
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
            <Link
              href={`/eventos/${evento.id}`}
              key={evento.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                alt={evento.nome}
                className="object-cover w-full h-48"
                height="192"
                src={`/placeholder.svg`}
                style={{
                  aspectRatio: "384/192",
                  objectFit: "cover",
                }}
                width="384"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{evento.nome}</h2>
                  {getEventoBadge(evento.tipo)}
                </div>
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

      <Footer/>
    </div>
  );
}

