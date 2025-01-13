import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'

interface User {
  avatar: string;
  cover: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  website: string;
}

interface ProfileSettingsProps {
  user: User;
}

export default function ProfileSettings({ user }: ProfileSettingsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Perfil do Usuário</h2>
      <div className="flex space-x-4">
        <div className="relative">
          <Image
            src={user.avatar}
            alt="Foto de perfil"
            width={150}
            height={150}
            className="rounded-full"
          />
          <Button className="absolute bottom-0 right-0" size="sm">Alterar</Button>
        </div>
        <div className="flex-1">
          <Label htmlFor="cover">Foto de Capa</Label>
          <div className="relative mt-1">
            <Image
              src={user.cover}
              alt="Foto de capa"
              width={400}
              height={100}
              className="w-full h-24 object-cover rounded"
            />
            <Button className="absolute bottom-2 right-2" size="sm">Alterar</Button>
          </div>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" defaultValue={user.name} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue={user.email} />
        </div>
        <div>
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" type="tel" defaultValue={user.phone} />
        </div>
        <div>
          <Label htmlFor="bio">Biografia</Label>
          <Textarea id="bio" defaultValue={user.bio} placeholder="Conte-nos um pouco sobre você..." />
        </div>
        <div>
          <Label htmlFor="location">Localização</Label>
          <Input id="location" defaultValue={user.location} placeholder="Cidade, Estado" />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input id="website" type="url" defaultValue={user.website} placeholder="https://seusite.com" />
        </div>
        <Button type="submit">Salvar Alterações</Button>
      </form>
    </div>
  )
}
