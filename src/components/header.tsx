"use client";

import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  Bell,
  User,
  Calendar,
  MapPin,
  Ticket,
  LogIn,
  LogOut,
  Settings,
} from "lucide-react";
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
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled] = useState(false);
  const [isLoggedIn] = useState(true);

  const upcomingEvents = [
    {
      id: 1,
      name: "Festival de Verão 2025",
      date: "20 Jan",
      location: "São Paulo",
    },
    {
      id: 2,
      name: "Show Internacional",
      date: "15 Fev",
      location: "Rio de Janeiro",
    },
    { id: 3, name: "Teatro Nacional", date: "01 Mar", location: "Curitiba" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      {/* Top Bar - Opcional */}
      <div className="hidden lg:block bg-slate-900 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">Download nosso app</span>
              <span>|</span>
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Seja um parceiro
              </a>
              <span>|</span>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Central de ajuda
              </a>
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
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={18}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <span className="flex items-center">
                      Explorar <Search className="ml-2" size={18} />
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[500px]">
                      <div>
                        <h3 className="font-medium mb-2 text-slate-900">
                          Categorias
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href="/eventos"
                            className="block text-slate-600 hover:text-blue-600"
                          >
                            Shows e Festivais
                          </Link>
                          <Link
                            href="/eventos"
                            className="block text-slate-600 hover:text-blue-600"
                          >
                            Teatro e Cultura
                          </Link>
                          <Link
                            href="/eventos"
                            className="block text-slate-600 hover:text-blue-600"
                          >
                            Esportes
                          </Link>
                          <Link
                            href="/eventos"
                            className="block text-slate-600 hover:text-blue-600"
                          >
                            Workshops
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2 text-slate-900">
                          Próximos Eventos
                        </h3>
                        {upcomingEvents.map((event) => (
                          <Link
                            key={event.id}
                            href={`/eventos/${event.id}`}
                            className="block mb-3 group"
                          >
                            <div className="flex items-start">
                              <Calendar
                                size={16}
                                className="mt-1 mr-2 text-slate-400"
                              />
                              <div>
                                <p className="text-sm font-medium text-slate-900 group-hover:text-blue-600">
                                  {event.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {event.date} • {event.location}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/eventos">
              <Button
                variant="ghost"
                className="border border-blue-500 rounded-md p-2"
              >
                <MapPin size={18} className="mr-2" />
                Minaçu, GO
              </Button>
            </Link>

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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {!isLoggedIn ? (
                  <>
                    <DropdownMenuItem>
                      <Link
                        href="/login"
                        className="flex items-center space-x-2"
                      >
                        <LogIn size={16} />
                        <span>Login</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/signup"
                        className="flex items-center space-x-2"
                      >
                        <LogIn size={16} />
                        <span>Cadastrar-se</span>
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>
                      <Link
                        href="/perfil"
                        className="flex items-center space-x-2"
                      >
                        <Ticket size={16} />
                        <span>Meus ingressos</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/perfil"
                        className="flex items-center space-x-2"
                      >
                        <Settings size={16} />
                        <span>Configurações</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/perfil"
                        className="flex items-center space-x-2"
                      >
                        <LogOut size={16} />
                        <span>Sair</span>
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/planos">
              <Button>
                <Ticket size={18} className="mr-2" />
                Divulgar Evento
              </Button>
            </Link>
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
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                  size={18}
                />
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                >
                  Explorar Eventos
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                >
                  Categorias
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                >
                  Meus Ingressos
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                >
                  Divulgar Evento
                </a>
                {!isLoggedIn ? (
                  <>
                    <a
                      href="/login"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                    >
                      Login
                    </a>
                    <a
                      href="/signup"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                    >
                      Cadastrar-se
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href="/meus-ingressos"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                    >
                      Meus Ingressos
                    </a>
                    <a
                      href="/configuracoes"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                    >
                      Configurações
                    </a>
                    <a
                      href="/logout"
                      className="block px-4 py-2 text-slate-900 hover:bg-slate-50 rounded-lg"
                    >
                      Sair
                    </a>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
