"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Clock, MapPin, AlertTriangle } from "lucide-react";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";
import ImageGallery from "@/components/image-gallery";
import Header from "@/components/header";
import PrivateEventContent from "@/components/screens/event/PrivateEvent";
import PublicEventContent from "@/components/screens/event/PublicEvent";
import { Evento } from "@/types/Events";
import SpecialEventContet from "@/components/screens/event/SpecialEvent";
import { useEffect } from "react";
import { getEventById } from "@/app/service/events/events";

export default function EventoDetalhesPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const evento: Evento = {
    id,
    nome: `Festival de Música de Minaçu ${id}`,
    tipo: "publico",
    data: "15/08/2024",
    horario: "18:00",
    local: "Parque Municipal de Minaçu",
    descricao:
      "O maior festival de música do interior de Goiás, reunindo artistas locais e nacionais em uma celebração da cultura musical brasileira.",
    imagens: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    ingressos: [
      {
        tipo: "Pista",
        preco: "R$ 80,00",
        descricao: "Acesso à área geral do evento",
      },
      {
        tipo: "VIP",
        preco: "R$ 150,00",
        descricao: "Acesso à área VIP com vista privilegiada",
      },
      {
        tipo: "Camarote",
        preco: "R$ 250,00",
        descricao: "Acesso ao camarote com open bar",
      },
    ],
    regras: [
      "Proibida a entrada de menores de 16 anos desacompanhados",
      "É obrigatória a apresentação de documento de identificação com foto",
      "Não é permitida a entrada com alimentos e bebidas",
    ],
    dicas: [
      "Chegue com antecedência para evitar filas",
      "Vista-se confortavelmente",
      "Traga protetor solar e água",
    ],
    localInfo: {
      nome: "Parque Municipal de Minaçu",
      capacidade: "10.000 pessoas",
      estrutura: [
        "Palco principal",
        "Área de alimentação",
        "Banheiros químicos",
        "Estacionamento",
      ],
      acessibilidade: "Rampas de acesso e áreas reservadas para cadeirantes",
    },
  };

    useEffect(() => {
      const buscarEvento = async () => {
        const response = await getEventById(id)
        console.log(response)
      }
      buscarEvento()
    },[])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold mb-6">{evento.nome}</h1>
        <div className="mb-4">
          <span
            className={`px-2 py-1 rounded ${
              evento.tipo === "privado"
                ? "bg-blue-500 text-white"
                : evento.tipo === "publico"
                ? "bg-gray-500 text-white"
                : evento.tipo === "particular"
                ? "bg-green-500 text-white"
                : ""
            }`}
          >
            {evento.tipo === "privado"
              ? "Evento Privado"
              : evento.tipo === "publico"
              ? "Evento Público"
              : evento.tipo === "particular"
              ? "Evento Particular"
              : null}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ImageGallery images={evento.imagens} eventName={evento.nome} />

            <p className="text-gray-600 mb-6">{evento.descricao}</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                <span>{evento.data}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                <span>{evento.horario}</span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 h-auto">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    <span>{evento.local}</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{evento.localInfo.nome}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <p>
                      <strong>Capacidade:</strong> {evento.localInfo.capacidade}
                    </p>
                    <p>
                      <strong>Estrutura:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      {evento.localInfo.estrutura.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p>
                      <strong>Acessibilidade:</strong>{" "}
                      {evento.localInfo.acessibilidade}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            {evento.tipo === "privado" ? (
              <PrivateEventContent evento={evento} />
            ) : evento.tipo === "publico" ? (
              <PublicEventContent evento={evento} />
            ) : evento.tipo === "particular" ? (
              <SpecialEventContet evento={evento} />
            ) : null}
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-yellow-600" />
            Informações Importantes
          </h3>
          <p>
            Lembre-se de trazer um documento de identificação com foto e chegar
            com antecedência para evitar filas.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
