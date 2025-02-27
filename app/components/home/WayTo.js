"use client";
import Circle from "../ui/Circle";
import { Fade, Slide } from "react-awesome-reveal";

function WayTo() {
  const circles = {
    circle1: {
      image: "/images/Oval.webp",
      alt: "Kontakt",
      title: "Kontakt",
      step: "1",
      description: (
        <>
          Skontaktuj się z nami telefonicznie lub mailowo.
          <br />
          <strong>518 812 110</strong> | <strong>limostal.garaze@gmail.com</strong>
        </>
      ),
    },
    circle2: {
      image: "/images/Oval 2.webp",
      alt: "Doradztwo",
      title: "Doradztwo",
      step: "2",
      description: "Nasi specjaliści pomogą Ci wybrać najlepsze rozwiązanie dopasowane do Twoich potrzeb.",
    },
    circle3: {
      image: "/images/Oval 3.webp",
      alt: "Wycena",
      title: "Wycena",
      step: "3",
      description: "Przygotujemy szczegółową ofertę, dostosowaną do Twoich wymagań i budżetu.",
    },
    circle4: {
      image: "/images/Oval 4.webp",
      alt: "Zamówienie",
      title: "Zamówienie",
      step: "4",
      description: "Określ wymiary, materiały i dodatkowe opcje dla Twojego garażu.",
    },
    circle5: {
      image: "/images/Oval 5.webp",
      alt: "Projekt",
      title: "Projekt",
      step: "5",
      description: "Tworzymy indywidualny projekt z dbałością o każdy detal.",
    },
    circle6: {
      image: "/images/Oval 6.webp",
      alt: "Produkcja",
      title: "Produkcja",
      step: "6",
      description: "Wykorzystujemy nowoczesne technologie i materiały najwyższej jakości.",
    },
    circle7: {
      image: "/images/Oval 7.webp",
      alt: "Transport",
      title: "Transport",
      step: "7",
      description: "Zapewniamy DARMOWY TRANSPORT, dostarczając garaż zgodnie z harmonogramem.",
    },
    circle8: {
      image: "/images/Oval 8.webp",
      alt: "Montaż",
      title: "Montaż",
      step: "8",
      description: "Nasza ekipa montażowa zapewni solidną i precyzyjną instalację.",
    },
  };

  return (
    <section className="way-to py-10 md:py-16 w-full bg-gray-50">
      <Fade triggerOnce>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-neutral-700">
          Droga do <span className="text-sky-500">wymarzonego garażu</span>
        </h2>
        <div className="container mx-auto px-2 md:px-4">
          <div className="relative">
            {/* Desktop connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-sky-200 -z-10 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8">
              {Object.values(circles).map((circle, index) => (
                <Slide direction={index % 2 === 0 ? "left" : "right"} triggerOnce key={index} delay={index * 100}>
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-sm md:text-lg lg:text-xl z-10">
                      {circle.step}
                    </div>
                    <Circle
                      image={circle.image}
                      alt={circle.alt}
                      title={circle.title}
                      description={circle.description}
                      className="transform transition-all duration-300 hover:scale-105 "
                    />
                  </div>
                </Slide>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default WayTo;
