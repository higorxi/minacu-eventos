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
import { User, Ticket, CreditCard, Settings, LogOut, Menu } from "lucide-react";
import Header from "@/components/header";

type TabName = "profile" | "tickets" | "payment" | "settings";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState<TabName>("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const tabNames: Record<TabName, string> = {
    profile: "Perfil",
    tickets: "Ingressos",
    payment: "Métodos de Pagamento",
    settings: "Configurações"
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabName);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 mb-24 mt-16">
        {/* Profile Header */}
        <div className="relative mb-8 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={user.cover}
            alt="Capa do perfil"
            width={1000}
            height={300}
            className="w-full h-32 md:h-48 object-cover"
          />
          <div className="absolute bottom-4 left-4 flex flex-col md:flex-row items-start md:items-center">
            <Image
              src={user.avatar}
              alt={user.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-white w-16 h-16 md:w-20 md:h-20"
            />
            <div className="mt-2 md:mt-0 ml-0 md:ml-4 bg-white bg-opacity-75 p-2 rounded">
              <h1 className="text-xl md:text-2xl font-bold">{user.name}</h1>
              <p className="text-sm md:text-base text-gray-600">
                Ativo desde: {user.activeSince}
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-5 h-5" />
            <span>{tabNames[activeTab]}</span>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="flex flex-col md:flex-row">
          {/* Sidebar Navigation */}
          <div className={`w-full md:w-64 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
            <TabsList className="flex flex-col space-y-2 md:space-y-6 justify-start h-auto p-4 w-full bg-white rounded-lg shadow-sm">
              <TabsTrigger
                value="profile"
                className="w-full flex items-center space-x-2 justify-start p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Perfil</span>
              </TabsTrigger>
              <TabsTrigger
                value="tickets"
                className="w-full flex items-center space-x-2 justify-start p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Ticket className="w-5 h-5" />
                <span>Ingressos</span>
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="w-full flex items-center space-x-2 justify-start p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <CreditCard className="w-5 h-5" />
                <span>Métodos de Pagamento</span>
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="w-full flex items-center space-x-2 justify-start p-2"
                onClick={() => setIsMobileMenuOpen(false)}
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
          </div>

          {/* Content Area */}
          <div className="flex-1 md:ml-6 mt-6 md:mt-0">
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