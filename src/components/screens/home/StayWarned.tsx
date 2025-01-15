import { Button } from "@/components/ui/button";

export default function StayWarnedSection() {
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
          <form className="flex flex-col space-y-2 justify-center">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-2 mb-2 rounded bg-slate-100 border border-slate-700 focus:outline-none focus:border-blue-500"
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
