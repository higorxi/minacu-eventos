import { Button } from "@/components/ui/button";
import { PrivateEventProps } from "@/types/Events";
import { Ticket, Info, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PrivateEventContent({ evento } : PrivateEventProps) {
  const [cpf, setCpf] = useState("");

  return (
    <>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Ticket className="mr-2 h-6 w-6" />
          Ingressos
        </h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Digite seu CPF para resgatar o ingresso"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
        </div>
        <Link href={`${window.location.pathname}/checkout`} passHref>
          <Button className="w-full mt-4">
            Resgatar ingresso
          </Button>
        </Link>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Info className="mr-2 h-6 w-6" />
          Regras e Normas
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {evento.regras.map((regra, index) => (
            <li key={index}>{regra}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <ThumbsUp className="mr-2 h-6 w-6" />
          Dicas
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {evento.dicas.map((dica, index) => (
            <li key={index}>{dica}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
