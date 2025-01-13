import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Ticket = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type OrderDetails = {
  tickets: Ticket[];
  fees: number;
  total: number;
}

type OrderSummaryProps = {
  orderDetails: OrderDetails;
  onQuantityChange: (id: number, newQuantity: number) => void;
}

export function OrderSummary({ orderDetails, onQuantityChange }: OrderSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo do Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {orderDetails.tickets.map(ticket => (
          <div key={ticket.id} className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{ticket.name}</p>
              <p className="text-sm text-gray-500">R$ {ticket.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onQuantityChange(ticket.id, Math.max(0, ticket.quantity - 1))}
              >
                -
              </Button>
              <span>{ticket.quantity}</span>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onQuantityChange(ticket.id, ticket.quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
        ))}
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>R$ {(orderDetails.total - orderDetails.fees).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxas</span>
            <span>R$ {orderDetails.fees.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>R$ {orderDetails.total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

