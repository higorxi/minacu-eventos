import { postSubscriber } from "@/app/service/email/email";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StayWarnedSection() {
  const [email, setEmail] = useState("");

  const handleEmailSubmission = (event: React.FormEvent) => {
    event.preventDefault(); 
    if (!email.trim()) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }
    subscribeEmail(email.trim());
  };

  const subscribeEmail = async (email: string) => {
    try {
      // Corrigir o tratamento de erros
      const response = await postSubscriber(email)
      if (response) {
        alert("E-mail cadastrado com sucesso!");
        setEmail("");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Erro ao cadastrar o e-mail.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar e-mail:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Não perca nenhum evento em Minaçu
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
            Cadastre-se agora e fique por dentro de todos os eventos da cidade!
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form
            onSubmit={handleEmailSubmission}
            className="flex flex-col space-y-2 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-2 mb-2 rounded bg-primary border border-slate-700 focus:outline-none focus:border-blue-500"
            />
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
