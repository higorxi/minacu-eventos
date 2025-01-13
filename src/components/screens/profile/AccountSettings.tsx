import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function AccountSettings() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Configurações da Conta</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Receber notificações por email</Label>
          <Switch id="notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="newsletter">Inscrever-se na newsletter</Label>
          <Switch id="newsletter" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="darkMode">Modo escuro</Label>
          <Switch id="darkMode" />
        </div>
        <Button variant="destructive">Excluir conta</Button>
      </div>
    </div>
  )
}

