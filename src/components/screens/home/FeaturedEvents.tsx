import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventImage {
  id: string;
  url: string;
}

interface FeaturedEventsSectionProps {
  eventImages: EventImage[];
}

export default function FeaturedEventsSection({
  eventImages,
}: FeaturedEventsSectionProps) {
    return(
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Eventos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {eventImages.map((image, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <Image
                    alt={`Evento em destaque ${index + 1}`}
                    className="object-cover w-full h-60"
                    height="240"
                    src={image.url}
                    key={image.id}
                    style={{
                      aspectRatio: "360/240",
                      objectFit: "cover",
                    }}
                    width="360"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-center mb-2">Nome do Evento {index}</h3>
                    <p className="text-sm text-gray-500">Data: XX/XX/XXXX</p>
                    <p className="text-sm text-gray-500">
                      Local: Centro de Eventos de Minaçu
                    </p>
                    <Button className="mt-4 w-full">Comprar Ingresso</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/eventos">
                <Button className="flex items-center">
                  Ver todos os eventos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
    )
}