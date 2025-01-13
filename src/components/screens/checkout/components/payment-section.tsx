import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type PaymentInfo = {
  method: 'credit' | 'debit' | 'pix';
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCVC?: string;
}

export function PaymentSection() {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({ method: 'credit' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Payment submitted:', paymentInfo)
    // Process payment here
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações de Pagamento</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <RadioGroup defaultValue="credit" onValueChange={(value) => setPaymentInfo(prev => ({ ...prev, method: value as 'credit' | 'debit' | 'pix' }))}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit" id="credit" />
              <Label htmlFor="credit">Cartão de Crédito</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="debit" id="debit" />
              <Label htmlFor="debit">Cartão de Débito</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pix" id="pix" />
              <Label htmlFor="pix">PIX</Label>
            </div>
          </RadioGroup>
          {(paymentInfo.method === 'credit' || paymentInfo.method === 'debit') && (
            <>
              <div>
                <Label htmlFor="cardNumber">Número do Cartão</Label>
                <Input id="cardNumber" name="cardNumber" value={paymentInfo.cardNumber || ''} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="cardName">Nome no Cartão</Label>
                <Input id="cardName" name="cardName" value={paymentInfo.cardName || ''} onChange={handleChange} required />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="cardExpiry">Validade</Label>
                  <Input id="cardExpiry" name="cardExpiry" placeholder="MM/AA" value={paymentInfo.cardExpiry || ''} onChange={handleChange} required />
                </div>
                <div className="flex-1">
                  <Label htmlFor="cardCVC">CVC</Label>
                  <Input id="cardCVC" name="cardCVC" value={paymentInfo.cardCVC || ''} onChange={handleChange} required />
                </div>
              </div>
            </>
          )}
          {paymentInfo.method === 'pix' && (
            <div className="text-center">
              <p>Escaneie o QR Code abaixo para pagar com PIX</p>
              <img src="/placeholder.svg?height=200&width=200" alt="QR Code PIX" className="mx-auto mt-4" />
            </div>
          )}
          <Button type="submit" className="w-full">Finalizar Compra</Button>
        </form>
      </CardContent>
    </Card>
  )
}

