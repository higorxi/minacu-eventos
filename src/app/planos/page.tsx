"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, Ticket, Calendar } from 'lucide-react'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('')

  const plans = [
    {
      name: "Básico",
      price: "R$ 99/mês",
      features: [
        "Até 5 eventos por mês",
        "Venda de ingressos básica",
        "Suporte por email"
      ]
    },
    {
      name: "Pro",
      price: "R$ 299/mês",
      features: [
        "Até 20 eventos por mês",
        "Venda de ingressos avançada",
        "Suporte prioritário",
        "Relatórios detalhados"
      ]
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      features: [
        "Eventos ilimitados",
        "Recursos personalizados",
        "Gerente de conta dedicado",
        "API completa"
      ]
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Plano selecionado:', selectedPlan)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">EventoPro: Impulsione seus Eventos</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Por que escolher EventoPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Megaphone className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Maior Visibilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Alcance um público mais amplo e aumente a visibilidade dos seus eventos.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Ticket className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Venda de Ingressos Simplificada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Gerencie facilmente a venda de ingressos com nossa plataforma intuitiva.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Organização Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Ferramentas poderosas para ajudar na organização e gestão dos seus eventos.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Nossos Planos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={selectedPlan === plan.name ? "border-purple-500 border-2" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    Selecionar Plano
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Cadastre-se e Comece Agora</h2>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" required />
                </div>
                <div>
                  <Label>Plano Selecionado</Label>
                  <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="flex flex-col space-y-1">
                    {plans.map((plan) => (
                      <div key={plan.name} className="flex items-center space-x-2">
                        <RadioGroupItem value={plan.name} id={plan.name} />
                        <Label htmlFor={plan.name}>{plan.name} - {plan.price}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Cadastrar e Assinar
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

