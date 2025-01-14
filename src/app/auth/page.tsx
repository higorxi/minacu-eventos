"use client";

import { useState } from "react";
import {
  Ticket,
  Mail,
  Lock,
  User,
  Calendar,
  Building2,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [accountType, setAccountType] = useState("personal");
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: "R$ 99/mês",
      features: [
        "Até 3 eventos simultâneos",
        "Suporte básico",
        "Relatórios mensais",
      ],
    },
    {
      id: "pro",
      name: "Profissional",
      price: "R$ 199/mês",
      features: [
        "Eventos ilimitados",
        "Suporte prioritário",
        "Analytics avançado",
      ],
    },
    {
      id: "enterprise",
      name: "Empresarial",
      price: "R$ 399/mês",
      features: [
        "API personalizada",
        "Gerente dedicado",
        "Personalização completa",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/wallpaper/1.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl w-full max-w-md p-8 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-purple-100 p-3 rounded-full">
            <Ticket className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          {isLogin ? "Bem-vindo de volta!" : "Criar nova conta"}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {isLogin
            ? "Acesse sua conta para comprar ingressos"
            : "Registre-se para explorar eventos na sua cidade"}
        </p>

        {!isLogin && (
          <div className="mb-6">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setAccountType("personal")}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  accountType === "personal"
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300"
                }`}
              >
                <User className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <div className="text-sm font-medium">Pessoa Física</div>
              </button>
              <button
                onClick={() => setAccountType("business")}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  accountType === "business"
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300"
                }`}
              >
                <Building2 className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <div className="text-sm font-medium">Empresa</div>
              </button>
            </div>
          </div>
        )}

        <form className="space-y-4">
          {!isLogin && accountType === "business" && (
            <>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="CNPJ"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700">
                  Selecione seu plano
                </label>
                <div className="grid gap-4">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-gray-800">{plan.name}</h3>
                        <span className="text-purple-600 font-medium">
                          {plan.price}
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {!isLogin && accountType === "personal" && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Senha"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>

          {!isLogin && accountType === "personal" && (
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                placeholder="Data de nascimento"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <Switch className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-gray-300 mr-2" id="Lembrar-me"/>
                <span className="text-gray-600">Lembrar-me</span>
              </label>
              <a href="#" className="text-purple-600 hover:text-purple-500">
                Esqueceu a senha?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            {isLogin ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setAccountType("personal");
              setSelectedPlan("");
            }}
            className="text-purple-600 hover:text-purple-500"
          >
            {isLogin
              ? "Não tem uma conta? Cadastre-se"
              : "Já tem uma conta? Entre agora"}
          </button>
        </div>
      </div>

      {/* Botão flutuante para a tela principal */}
      <Link
        href="/"
        className="fixed bottom-10 right-10 bg-white text-purple-600 rounded-full p-4 shadow-xl hover:bg-purple-700 hover:text-white transition-all"
      >
        <span className="text-lg font-semibold">Ver Eventos</span>
      </Link>
    </div>
  );
};

export default AuthForm;
