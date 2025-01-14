"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Info,
  AlertTriangle,
  ThumbsUp,
} from "lucide-react";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";
import ImageGallery from "@/components/image-gallery";
import Link from "next/link";
import Header from "@/components/header";

export default function EventoDetalhesPage() {
  const [selectedTicket, setSelectedTicket] = useState("");
  const { id } = useParams();

  const evento = {
    id,
    nome: `Festival de Música de Minaçu ${id}`,
    data: "15/08/2024",
    horario: "18:00",
    local: "Parque Municipal de Minaçu",
    descricao:
      "O maior festival de música do interior de Goiás, reunindo artistas locais e nacionais em uma celebração da cultura musical brasileira.",
    imagens: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-4xl font-bold mb-6">{evento.nome}</h1>

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
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Ticket className="mr-2 h-6 w-6" />
                Ingressos
              </h2>
              <div className="space-y-4">
                {evento.ingressos.map((ingresso, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {ingresso.tipo}
                    </h3>
                    <p className="text-lg font-bold text-primary mb-2">
                      {ingresso.preco}
                    </p>
                    <p className="text-gray-600 mb-4">{ingresso.descricao}</p>
                    <Button
                      onClick={() => setSelectedTicket(ingresso.tipo)}
                      variant={
                        selectedTicket === ingresso.tipo ? "default" : "outline"
                      }
                      className="w-full"
                    >
                      {selectedTicket === ingresso.tipo
                        ? "Selecionado"
                        : "Selecionar"}
                    </Button>
                  </div>
                ))}
              </div>
              <Link href={`${window.location.pathname}/checkout`} passHref>
              <Button className="w-full mt-4" disabled={!selectedTicket}>
                Comprar Ingresso
              </Button>
              </Link>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Info className="mr-2 h-6 w-6" />
                Regras e Normas
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {evento.regras.map((regra, index) => (
                  <li key={index}>{regra}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <ThumbsUp className="mr-2 h-6 w-6" />
                Dicas
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {evento.dicas.map((dica, index) => (
                  <li key={index}>{dica}</li>
                ))}
              </ul>
            </section>
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
