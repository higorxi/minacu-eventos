import EventTypeCard from "@/components/event-type-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Users, Ticket, Globe, Lock, CreditCard, Check, X } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EventosCidade</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#event-types" className="hover:underline">Tipos de Eventos</Link></li>
              <li><Link href="#features" className="hover:underline">Ferramentas</Link></li>
              <li><Link href="#pricing" className="hover:underline">Planos</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Divulgue seus eventos com facilidade</h2>
            <p className="text-xl mb-8">Plataforma para todos os tipos de eventos - públicos, privados ou com venda de ingressos</p>
            <Button size="lg" asChild>
              <Link href="#event-types">Comece a Divulgar</Link>
            </Button>
          </div>
        </section>

        <section id="event-types" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Tipos de Eventos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <EventTypeCard
                icon={<Globe className="h-12 w-12 mb-4 text-primary" />}
                title="Eventos Públicos"
                description="Divulgação gratuita para eventos abertos ao público. Ideal para eventos comunitários e culturais."
                isFree={true}
              />
              <EventTypeCard
                icon={<Lock className="h-12 w-12 mb-4 text-primary" />}
                title="Eventos Privados"
                description="Crie convites personalizados para seus eventos privados. Controle total sobre os detalhes e a lista de convidados."
                isFree={false}
              />
              <EventTypeCard
                icon={<Ticket className="h-12 w-12 mb-4 text-primary" />}
                title="Eventos com Ingressos"
                description="Venda ingressos online para seus eventos particulares. Gerencie vendas e acessos com facilidade."
                isFree={false}
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-secondary py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossas Ferramentas</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Recurso</TableHead>
                  <TableHead>Gratuito</TableHead>
                  <TableHead>Premium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Divulgação de eventos públicos</TableCell>
                  <TableCell><Check className="text-green-500" /></TableCell>
                  <TableCell><Check className="text-green-500" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Criação de eventos privados</TableCell>
                  <TableCell><X className="text-red-500" /></TableCell>
                  <TableCell><Check className="text-green-500" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Venda de ingressos online</TableCell>
                  <TableCell><X className="text-red-500" /></TableCell>
                  <TableCell><Check className="text-green-500" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Personalização de convites</TableCell>
                  <TableCell><X className="text-red-500" /></TableCell>
                  <TableCell><Check className="text-green-500" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gerenciamento de lista de convidados</TableCell>
                  <TableCell><X className="text-red-500" /></TableCell>
                  <TableCell><Check className="text-green-500" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Relatórios de vendas e participação</TableCell>
                  <TableCell><X className="text-red-500" /></TableCell>
                  <TableCell><Check className="text-green-500" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Planos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Plano Gratuito</CardTitle>
                  <CardDescription>Para divulgação de eventos públicos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Divulgação de eventos públicos
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      Listagem no calendário da cidade
                    </li>
                    <li className="flex items-center">
                      <X className="h-5 w-5 mr-2 text-red-500" />
                      Recursos premium
                    </li>
                  </ul>
                  <Button className="w-full">Começar Grátis</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plano Premium</CardTitle>
                  <CardDescription>Para eventos privados e venda de ingressos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-primary" />
                      Taxa única de adesão
                    </li>
                    <li className="flex items-center">
                      <Ticket className="h-5 w-5 mr-2 text-primary" />
                      R$ 2,00 por ingresso vendido online
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Eventos privados ilimitados
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      Todas as ferramentas premium
                    </li>
                  </ul>
                  <Button className="w-full">Contratar Agora</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Comece a divulgar seus eventos hoje!</h2>
            <p className="text-xl mb-8">Junte-se a milhares de organizadores que já confiam na EventosCidade</p>
            <Button size="lg" variant="secondary">Criar Minha Conta</Button>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 EventosCidade. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

