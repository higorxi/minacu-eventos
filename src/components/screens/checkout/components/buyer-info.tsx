import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type BuyerInfo = {
  name: string;
  email: string;
  phone: string;
}

export function BuyerInfo({ onNext, onBack }: { onNext: (info: BuyerInfo) => void, onBack: () => void }) {
  const [info, setInfo] = useState<BuyerInfo>({ name: '', email: '', phone: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext(info)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Informações do Comprador</h2>
      <div>
        <Label htmlFor="name">Nome Completo</Label>
        <Input id="name" name="name" value={info.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" value={info.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="phone">Telefone</Label>
        <Input id="phone" name="phone" type="tel" value={info.phone} onChange={handleChange} required />
      </div>
      <div className="flex justify-between">
        <Button type="button" onClick={onBack} variant="outline">Voltar</Button>
        <Button type="submit">Próximo</Button>
      </div>
    </form>
  )
}

