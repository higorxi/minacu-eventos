import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  MapPin,
  Music,
  Theater,
  Users,
  ArrowRight,
  Star,
  Ticket,
} from "lucide-react";
import Footer from "@/components/footer";
import Image from "next/image";
import Header from "@/components/header";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Descubra Minaçu através de seus eventos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Sua plataforma completa de bilheteria digital. Encontre e
                  participe de eventos públicos e particulares em Minaçu.
                </p>
              </div>
              <div className="w-full space-y-2">
                <form className="flex space-x-2 justify-center">
                  <Input
                    className="max-w-lg flex-1 bg-white text-black"
                    placeholder="Pesquisar eventos"
                    type="text"
                  />
                  <Button type="submit">Buscar</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Categorias de Eventos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Music className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Música</h3>
                <p className="text-sm text-gray-500 text-center">
                  Shows, festivais e apresentações musicais
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Theater className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Teatro</h3>
                <p className="text-sm text-gray-500 text-center">
                  Peças teatrais e espetáculos
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Eventos Sociais</h3>
                <p className="text-sm text-gray-500 text-center">
                  Festas, encontros e celebrações
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Eventos Públicos</h3>
                <p className="text-sm text-gray-500 text-center">
                  Comemorações cívicas e municipais
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Eventos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <Image
                    alt="Evento em destaque"
                    className="object-cover w-full h-60"
                    height="240"
                    src={`/placeholder.svg`}
                    style={{
                      aspectRatio: "360/240",
                      objectFit: "cover",
                    }}
                    width="360"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Nome do Evento {i}</h3>
                    <p className="text-sm text-gray-500">Data: XX/XX/XXXX</p>
                    <p className="text-sm text-gray-500">
                      Local: Centro de Eventos de Minaçu
                    </p>
                    <Button className="mt-4 w-full">Comprar Ingresso</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/eventos">
                <Button className="flex items-center">
                  Ver todos os eventos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Por que escolher MinaçuEventos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              <div className="flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Eventos de Qualidade</h3>
                <p className="text-gray-600">
                  Curadoria cuidadosa de eventos para garantir as melhores
                  experiências.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Ticket className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Compra Fácil</h3>
                <p className="text-gray-600">
                  Processo de compra de ingressos simples e seguro.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Eventos Locais</h3>
                <p className="text-gray-600">
                  Foco em eventos da região de Minaçu para valorizar a cultura
                  local.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Não perca nenhum evento em Minaçu
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                Cadastre-se agora e fique por dentro de todos os eventos da
                cidade!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-2 justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 mb-2 rounded bg-slate-100 border border-slate-700 focus:outline-none focus:border-blue-500"
              />
                <Button type="submit" className="w-full">
                  Cadastrar
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
