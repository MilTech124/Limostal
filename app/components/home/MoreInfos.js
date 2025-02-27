"use client";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import { 
  TruckIcon, 
  WrenchScrewdriverIcon, 
  SwatchIcon, 
  HomeModernIcon,
  ArrowRightIcon 
} from "@heroicons/react/24/outline";

function MoreInfos() {
  const infoCards = [
    {
      icon: TruckIcon,
      title: "Transport i montaż",
      description: "Dowiedz się więcej o naszych usługach transportu i profesjonalnego montażu.",
      link: "/warto-wiedziec#transport"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Przygotowanie podłoża",
      description: "Sprawdź jak prawidłowo przygotować podłoże pod garaż blaszany.",
      link: "/warto-wiedziec#przygotowanie-podloza"
    },
    {
      icon: SwatchIcon,
      title: "Kolorystyka",
      description: "Zapoznaj się z dostępną paletą kolorów i opcjami wykończenia.",
      link: "/warto-wiedziec#kolorystyka"
    },
    {
      icon: HomeModernIcon,
      title: "Bramy garażowe",
      description: "Poznaj różne typy bram garażowych i wybierz najlepszą dla siebie.",
      link: "/warto-wiedziec#brama"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_img3.jpg"
          alt="Tło informacyjne"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Fade triggerOnce>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-white">
            Przydatne <span className="text-sky-500">informacje</span>
          </h2>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <Slide direction="up" triggerOnce key={index} delay={index * 100}>
              <Link href={card.link} className="block h-full">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group h-full flex flex-col">
                  <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-3">{card.title}</h3>
                  <p className="text-gray-200 text-center mb-4">{card.description}</p>
                  <div className="mt-auto flex justify-center">
                    <span className="text-sky-400 flex items-center text-sm font-medium group-hover:text-sky-300">
                      Dowiedz się więcej
                      <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </Slide>
          ))}
        </div>

        <Fade triggerOnce delay={300}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-10 max-w-3xl mx-auto border border-white/20">
            <p className="text-gray-200 text-center mb-8">
              W naszej zakładce <span className="text-sky-500 font-semibold">Warto wiedzieć</span> znajdziesz cenne informacje i porady związane z garażami oraz naszymi usługami. Przygotowaliśmy artykuły, poradniki i odpowiedzi na często zadawane pytania, aby pomóc Ci podjąć najlepsze decyzje.
            </p>
            <div className="text-center">
              <Link href="/warto-wiedziec">
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto">
                  <span>Warto wiedzieć</span>
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default MoreInfos;
