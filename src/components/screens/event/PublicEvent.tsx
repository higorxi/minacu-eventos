import { PublicEventProps } from "@/types/Events";
import { Info, ThumbsUp } from "lucide-react";

export default function PublicEventContent({ evento } : PublicEventProps) {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Info className="mr-2 h-6 w-6" />
          Informações do Evento
        </h2>
        <p className="text-gray-600 mb-4">{evento.descricao}</p>
        <p className="text-gray-600 mb-4">
          Este é um evento público e gratuito. Não é necessário adquirir
          ingressos.
        </p>
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
