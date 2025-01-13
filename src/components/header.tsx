"use client"

import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Bell, 
  User,
  Calendar,
  MapPin,
  Ticket
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled] = useState(false);

  // Simula eventos próximos
  const upcomingEvents = [
    { id: 1, name: "Festival de Verão 2025", date: "20 Jan", location: "São Paulo" },
    { id: 2, name: "Show Internacional", date: "15 Fev", location: "Rio de Janeiro" },
    { id: 3, name: "Teatro Nacional", date: "01 Mar", location: "Curitiba" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
    }`}>
      {/* Top Bar - Opcional */}
      <div className="hidden lg:block bg-slate-900 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Download nosso app</span>
              <span>|</span>
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Seja um parceiro</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-400 transition-colors">Central de ajuda</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Minaçu<span className="text-blue-600">Eventos</span>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Busque por eventos, shows, teatro..."
                className="w-full pl-10 pr-4 py-2 border-slate-200 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Explorar</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[500px]">
                      <div>
                        <h3 className="font-medium mb-2 text-slate-900">Categorias</h3>
                        <div className="space-y-2">
                          <a href="#" className="block text-slate-600 hover:text-blue-600">Shows e Festivais</a>
                          <a href="#" className="block text-slate-600 hover:text-blue-600">Teatro e Cultura</a>
                          <a href="#" className="block text-slate-600 hover:text-blue-600">Esportes</a>
                          <a href="#" className="block text-slate-600 hover:text-blue-600">Workshops</a>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2 text-slate-900">Próximos Eventos</h3>
                        {upcomingEvents.map(event => (
                          <a key={event.id} href="#" className="block mb-3 group">
                            <div className="flex items-start">
                              <Calendar size={16} className="mt-1 mr-2 text-slate-400" />
                              <div>
                                <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600">
                                  {event.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {event.date} • {event.location}
                                </p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost">
              <MapPin size={18} className="mr-2" />
              Minaçu, GO
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Suas notificações</DropdownMenuItem>
                <DropdownMenuItem>Configurar alertas</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>

            <Button>
              <Ticket size={18} className="mr-2" />
              Vender Ingressos
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Busque por eventos..."
                  className="w-full pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                <a href="#" className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg">
                  Explorar Eventos
                </a>
                <a href="#" className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg">
                  Categorias
                </a>
                <a href="#" className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg">
                  Sua Cidade
                </a>
                <a href="#" className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg">
                  Vender Ingressos
                </a>
                <a href="#" className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg">
                  Login
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;