import {
  Star,
  Ticket,
  MapPin,
  Music,
  Theater,
  Users,
  Calendar,
} from "lucide-react";

export default function WhyUseSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Por que escolher MinaçuEventos?
        </h2>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 mb-6">
            MinaçuEventos oferece a melhor curadoria de eventos para garantir
            experiências únicas e memoráveis. Confira os motivos para confiar em
            nossos serviços:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mb-8">
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

        <h3 className="text-2xl font-bold text-center mb-6">
          Atuamos em diversos segmentos:
        </h3>
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
  );
}
