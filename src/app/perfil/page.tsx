"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AccountSettings from "@/components/screens/profile/AccountSettings";
import PaymentMethods from "@/components/screens/profile/PaymentMethods";
import ProfileSettings from "@/components/screens/profile/ProfileSettings";
import TicketList from "@/components/screens/profile/TicketList";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Footer from "@/components/footer";
import { User, Ticket, CreditCard, Settings, LogOut } from "lucide-react";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  const user = {
    name: "João Silva",
    avatar: "/placeholder.svg?height=100&width=100",
    cover: "/placeholder.svg?height=300&width=1000",
    activeSince: "01/01/2023",
    email: "higorgiovane7@gmail.com",
    phone: "62985194415",
    bio: "O brabo dos ingressos",
    location: "Minaçu",
    website: "https://portfolio-ahage.vercel.app/",
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div>
      <main className="container mx-auto p-4 mb-24">
        <div className="relative mb-8 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={user.cover}
            alt="Capa do perfil"
            width={1000}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-center">
            <Image
              src={user.avatar}
              alt={user.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            <div className="ml-4 bg-white bg-opacity-75 p-2 rounded">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">Ativo desde: {user.activeSince}</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex">
          <div className="flex-none w-64 ">
            <TabsList className="flex-col space-y-6 justify-start h-auto p-4">
              <TabsTrigger
                value="profile"
                className="w-full flex items-center space-x-2 justify-start p-2"
              >
                <User className="w-5 h-5" />
                <span>Perfil</span>
              </TabsTrigger>
              <TabsTrigger
                value="tickets"
                className="w-full flex items-center space-x-2 justify-start p-2"
              >
                <Ticket className="w-5 h-5" />
                <span>Ingressos</span>
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="w-full flex items-center space-x-2 justify-start p-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Métodos de Pagamento</span>
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="w-full flex items-center space-x-2 justify-start p-2"
              >
                <Settings className="w-5 h-5" />
                <span>Configurações</span>
              </TabsTrigger>
              <Separator className="my-2" />
              <Button
                variant="ghost"
                className="w-full flex items-center space-x-2 justify-start"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </Button>
            </TabsList>
            ;
          </div>

          <div className="flex-1">
            <TabsContent value="profile">
              <ProfileSettings user={user} />
            </TabsContent>
            <TabsContent value="tickets">
              <TicketList />
            </TabsContent>
            <TabsContent value="settings">
              <AccountSettings />
            </TabsContent>
            <TabsContent value="payment">
              <PaymentMethods />
            </TabsContent>
          </div>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
