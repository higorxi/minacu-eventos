"use client";

import Footer from "@/components/footer";
import ImageCarousel from "@/components/image-carrosel";
import Header from "@/components/header";
import FeaturedEventsSection from "@/components/screens/home/FeaturedEvents";
import WhyUseSection from "@/components/screens/home/WhyUse";
import StayWarnedSection from "@/components/screens/home/StayWarned";

export default function LandingPage() {
  const eventImages = [
    {
      id: "image-1",
      url: "https://public.baladapp.com.br/site/banner/465/arquivo/52cfb5a1844840258e67928b039fb5e8.png",
    },
    {
      id: "image-2",
      url: "https://public.baladapp.com.br/site/banner/477/arquivo/d5b3f402761e666ae8e21453def79e8d.jpg",
    },
    {
      id: "image-3",
      url: "https://public.baladapp.com.br/site/banner/476/arquivo/d4fcf493984e56b45989a94a390c1b37.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mt-16">
        <section className="w-full px-4 py-12 md:py-18 lg:py-18 bg-white text-black">
          {/* Título da seção */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl lg:text-5xl">
              Próximos Eventos
            </h2>
            <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
              Não perca os eventos mais esperados! Confira as opções incríveis
              que preparamos para você.
            </p>
          </div>

          <div className="w-full">
            <ImageCarousel images={eventImages} />
          </div>
        </section>

        <FeaturedEventsSection eventImages={eventImages} />

        <WhyUseSection />

        <StayWarnedSection />
      </main>

      <Footer />
    </div>
  );
}
