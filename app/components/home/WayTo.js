"use client";
import Circle from "../ui/Circle";
import { Fade } from "react-awesome-reveal";

function WayTo() {
  const circles = {
    circle1: {
      image: "/images/Oval.webp",
      alt: "Oval",
      title: "Kontakt",
      description: (
        <>
          Niezależnie od tego, czy masz pytania dotyczące naszych produktów, czy
          potrzebujesz wsparcia przy zamówieniu, nasz zespół jest zawsze do
          Twojej dyspozycji. <br />
          Numer telefonu: <strong>518 812 110</strong>
          <br />
          Adres e-mail: <strong>limostal.garaze@gmail.com</strong>
        </>
      ),
    },
    circle2: {
      image: "/images/Oval 2.webp",
      alt: "Oval",
      title: "Doradztwo na najwyższym poziomie",
      description: `Nasi doświadczeni specjaliści są gotowi wesprzeć Cię w
                    wyborze najlepszej opcji, dostosowanej do Twoich indywidualnych potrzeb. Wykorzystaj
                    nasze bogate doświadczenie i profesjonalną wiedzę, aby podjąć pewną decyzję.`,
    },
    circle3: {
      image: "/images/Oval 3.webp",
      alt: "Oval",
      title: "Wycena",
      description: `W Limostal rozumiemy, jak ważna jest precyzyjna wycena. Nasz zespół dostarczy Ci
                    szczegółową i uczciwą ofertę, dostosowaną do Twoich potrzeb. Skontaktuj się z nami, a my
                    zajmiemy się resztą!`,
    },
    circle4: {
      image: "/images/Oval 4.webp",
      alt: "Oval",
      title: "Zamówienie",
      description: `Zamówienia wymagają precyzyjnego określenia wymiarów, materiałów i opcji.
                    Klient powinien dostarczyć specyfikację potrzeb, w tym wybór drzwi, okien czy systemów
                    zabezpieczeń. Dobra komunikacja i jasne oczekiwania gwarantują satysfakcję oraz
                    terminowość realizacji.`,
    },
    circle5: {
      image: "/images/Oval 5.webp",
      alt: "Oval",
      title: "Projekt",
      description: `W Limostal wierzymy, że każdy projekt zasługuje na indywidualne podejście. Nasi
                specjaliści realizują Twoje pomysły z dbałością o każdy detal, od konsultacji po finalną
                realizację. Dzięki naszej wiedzy i doświadczeniu, oferujemy rozwiązania spełniające wszystkie
                oczekiwania. Zaufaj Limostal i pozwól nam przekształcić Twoje wizje w rzeczywistość.`,
    },
    circle6: {
      image: "/images/Oval 6.webp",
      alt: "Oval",
      title: "Produkcja",
      description: `Stawiamy na innowacyjność, precyzję i jakość. Dzięki nowoczesnym technologiom
                    i wykwalifikowanej kadrze, spełniamy najwyższe wymagania. Z Limostal otrzymasz nie tylko
                    garaż, ale również pewność, że inwestujesz w produkt o najwyższej jakości.`,
    },
    circle7: {
      image: "/images/Oval 7.webp",
      alt: "Oval",
      title: "Transport",
      description: `Zapewniamy DARMOWY TRANSPORT, dbając o dostarczenie garażu w
                    nienaruszonym stanie i zgodnie z harmonogramem. Dzięki naszemu transportowi Twój garaż
                    będzie gotowy do użytku w dogodnym terminie, pod warunkiem, że ciężarówka będzie w
                    stanie dojechać do wskazanego miejsca.`,
    },
    circle8: {
      image: "/images/Oval 8.webp",
      alt: "Oval",
      title: "Montaż",
      description: `W Limostal rozumiemy, jak ważny jest montaż garażu jako kluczowy element całego
                    procesu. Nasza doświadczona ekipa montażowa zapewni solidną i precyzyjną instalację,
                    dbając o najwyższe standardy jakości.`,
    },
  };

  return (
    <section className="way-to py-10 w-full">
      <h2 className="md:text-5xl text-xl text-right md:pr-10 border-b-4 flex justify-end  text-neutral-400">
        Droga do &nbsp;<span className="text-sky-500">wymarzonego garażu</span>
      </h2>
      <div className="flex flex-wrap justify-center ">
        <div className="flex flex-wrap justify-center max-sm:scale-50 max-sm:mt-[-350px]">
          <Circle
            image={circles.circle1.image}
            title={circles.circle1.title}
            description={circles.circle1.description}
          />
          <div className="lg:pt-40">
            <Circle
              image={circles.circle2.image}
              title={circles.circle2.title}
              description={circles.circle2.description}
            />
          </div>
          <div className="lg:pt-80">
            <Circle
              image={circles.circle3.image}
              title={circles.circle3.title}
              description={circles.circle3.description}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center max-sm:scale-50 max-sm:mt-[-650px]">
          <div className="lg:pt-20">
            <Circle
              image={circles.circle5.image}
              title={circles.circle5.title}
              description={circles.circle5.description}
            />
          </div>
          <div className="lg:-mt-20">
            <Circle
              image={circles.circle4.image}
              title={circles.circle4.title}
              description={circles.circle4.description}
            />
          </div>
          <div className="lg:pt-0  lg:w-[400px]"></div>
        </div>

        <div className="flex flex-wrap justify-center max-sm:scale-50 max-sm:mt-[-550px]">
          <div className="lg:pt-0  lg:w-[400px]"></div>
          <div className="lg:-mt-20">
            <Circle
              image={circles.circle6.image}
              title={circles.circle6.title}
              description={circles.circle6.description}
            />
          </div>
          <div className="lg:pt-40">
            <Circle
              image={circles.circle7.image}
              title={circles.circle7.title}
              description={circles.circle7.description}
            />
          </div>
        </div>

        <div className="flex flex-wrap  w-full justify-center max-sm:scale-50 max-sm:mt-[-380px]">
          <div className="lg:-mt-20">
            <Circle
              image={circles.circle8.image}
              title={circles.circle8.title}
              description={circles.circle8.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WayTo;
