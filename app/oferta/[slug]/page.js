import React from "react";
import HeroPages from "../../components/home/HeroPages";
import Tabs from "./Tabs";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600; // ISR co 1 godzinę

const offers = {
  "garaze-z-brama-segmentowa": {
    title: "Garaże z bramą segmentową",
    description:
      "Oferujemy nowoczesne garaże z bramą segmentową, która zapewnia wygodę, bezpieczeństwo i doskonałą izolację termiczną.",
    content:
      "Oferujemy również nowoczesne garaże wyposażone w bramę segmentową, która zapewnia wygodę i bezpieczeństwo użytkowania. Bramy segmentowe cechują się łatwością obsługi, cichą pracą oraz doskonałą izolacją termiczną. Nasze garaże z bramą segmentową to idealne rozwiązanie dla tych, którzy cenią sobie komfort i nowoczesne technologie. Bramy segmentowe otwierane są pionowo, a konstrukcja chowana jest pod dachem. Dzięki temu oszczędzają miejsce zarówno w garażu jak i przed nim. Brama ta stworzona jest z segmentów, połączonych pianką, która chroni przed hałasem oraz przenikaniem powietrza. Standardowo brama wyposażona jest w automat.",
    image: "/images/garaze-z-brama-segmentowa.jpg",
    features: [
      "Łatwość obsługi i cicha praca",
      "Doskonała izolacja termiczna",
      "Wygoda i nowoczesny wygląd",
      "Ochrona przed hałasem i przenikaniem powietrza",
      "Wyposażenie w automat w standardzie"
    ]
  },
  "schowki-ogrodowe": {
    title: "Schowki ogrodowe",
    description:
      "Praktyczne i estetyczne schowki ogrodowe Limostal, idealne do przechowywania narzędzi, rowerów i innych przedmiotów.",
    content:
      "Nasze schowki ogrodowe to praktyczne i estetyczne rozwiązanie dla każdego ogrodu. Wykonane z wysokiej jakości materiałów, zapewniają trwałość i odporność na warunki atmosferyczne. Schowki ogrodowe Limostal to doskonałe miejsce do przechowywania narzędzi ogrodowych, rowerów czy innych przedmiotów, które potrzebują bezpiecznego schronienia. Mogą być wyposażone w mniejsze bramy uchylne, drzwi dwuskrzydłowe lub pojedyncze drzwi, dzięki temu jest możliwość przechowywania tam motorów, rowerów lub innych większych sprzętów.",
    image: "/images/schowki-ogrodowe.jpg",
    features: [
      "Trwałość i odporność na warunki atmosferyczne",
      "Możliwość wyposażenia w różne typy drzwi",
      "Idealne do przechowywania narzędzi ogrodowych",
      "Możliwość przechowywania większych sprzętów",
      "Estetyczny wygląd dopasowany do ogrodu"
    ]
  },
  "wiaty-smietnikowe": {
    title: "Wiaty śmietnikowe",
    description:
      "Funkcjonalne i estetyczne wiaty śmietnikowe z trwałych materiałów, które pomagają utrzymać porządek na posesji.",
    content:
      "Wiaty śmietnikowe to funkcjonalne rozwiązanie, które pomaga utrzymać porządek na posesji. Nasze wiaty są wykonane z trwałych materiałów, takich jak lamele – poziome panele z blachy powlekanej. Dzięki temu pojemniki na śmieci są chronione przed niekorzystnymi warunkami atmosferycznymi, a sama konstrukcja z profili zamkniętych wyróżnia się nowoczesnym wyglądem. Wiaty śmietnikowe harmonijnie wpisują się w estetykę Twojej posesji, zapewniając jednocześnie elegancki i schludny wygląd.",
    image: "/images/wiaty-smietnikowe.jpg",
    features: [
      "Ochrona pojemników przed warunkami atmosferycznymi",
      "Konstrukcja z profili zamkniętych",
      "Nowoczesny wygląd dzięki lamelom",
      "Harmonijne wpisanie się w estetykę posesji",
      "Łatwy dostęp do pojemników"
    ]
  },
  "nowoczesne-garaze": {
    title: "Nowoczesne Garaże",
    description:
      "Stylowe i trwałe nowoczesne garaże z profili zamkniętych ocynkowanych, które gwarantują odporność na warunki atmosferyczne.",
    content:
      "Nasze nowoczesne garaże charakteryzują się solidną konstrukcją wykonaną z profili zamkniętych ocynkowanych, które gwarantują trwałość i odporność na warunki atmosferyczne. Dzięki eleganckiemu designowi i wysokiej jakości materiałom, nasze garaże doskonale komponują się z każdą posesją, zapewniając nie tylko funkcjonalność, ale i stylowy wygląd. Nity i śruby używane w naszych garażach, wiatach śmietnikowych oraz schowkach ogrodowych są w kolorze blachy. Dzięki temu cała konstrukcja prezentuje się spójnie i elegancko.",
    image: "/images/nowoczesne-garaze.jpg",
    features: [
      "Solidna konstrukcja z profili zamkniętych ocynkowanych",
      "Trwałość i odporność na warunki atmosferyczne",
      "Elegancki design i wysokiej jakości materiały",
      "Nity i śruby w kolorze blachy dla spójnego wyglądu",
      "Możliwość dopasowania wymiarów pod klienta"
    ]
  },
};

export async function generateStaticParams() {
  return Object.keys(offers).map((slug) => ({
    slug,
  }));
}

async function getSmallGalery() {
  const data = await axios.get(process.env.NEXT_OFERTS);
  return data.data;
}

// Strona dynamiczna na podstawie sluga
export default async function OfferPage({ params }) {
  const { slug } = params;
  const offer = offers[slug];
  const smallGalery = await getSmallGalery();

  const itemsGallery = smallGalery[0].acf.photo_gallery;
  const currentGallery = itemsGallery[slug];
  const numberGallery = currentGallery.length;
  const thisGallery = currentGallery[numberGallery - 1];

  if (!offer) return <p>Oferta nie znaleziona.</p>;

  const accessories = [
    {
      key: "drzwi",
      title: "Drzwi",
      description:
        "Nasze drzwi mogą posiadać przetłoczenia szerokie (T20) lub wąskie (T8). Mogą być montowane bezpośrednio w bramie lub w ścianach bocznych. Każde drzwi posiadają osobny zestaw kluczy, zapewniając dodatkowe bezpieczeństwo i wygodę użytkowania. O wymiar zapytaj naszych specjalistów.",
      image: "/images/oferta/drzwi1.jpeg",
      image2: "/images/oferta/drzwi2.jpeg",
    },
    {
      key: "okno",
      title: "Okno",
      description:
        "W naszej ofercie znajdziesz okno uchylne o wymiarach 0,80 x 0,60 [m] lub okno typu FIX o wymiarach 0,40 x 1,80 [m] (nieuchylne) w dowolnej kolorystyce.",
      image: "/images/oferta/okno1.jpeg",
      image2: "/images/oferta/okno2.jpeg",
    },
    {
      key: "filc_antykondensacyjny",
      title: "Filc antykondensacyjny",
      description:
        "Filc antykondensacyjny na dachu garażu zmniejsza skraplanie się pary wodnej, pomagając utrzymać suche i bezpieczne wnętrze.",
      image: "/images/oferta/filc1.jpg",
      image2: "/images/oferta/filc2.jpg",
    },
    {
      key: "rynny",
      title: "Rynny",
      description:
        "Nasze rynny w zestawie posiadają spusty, a ich kolorystyka jest dobierana do koloru dachu lub indywidualnych potrzeb Klienta. Wykonane są z wysokiej jakości PVC, zapewniają trwałość i odporność na warunki atmosferyczne. Montowane są ze spadkiem, co umożliwia skuteczne odprowadzanie wody. Możliwość skrócenia rynny pozwala na zbieranie deszczówki do zbiornika — praktyczne i ekologiczne rozwiązanie.",
      image: "/images/oferta/rynny.jpeg",
      image2: "/images/oferta/rynny2.jpeg",
    },
    {
      key: "blachodachowka",
      title: "Blachodachówka",
      description:
        "Montaż blachodachówki to dwustopniowy proces. Najpierw montowana jest blacha trapezowa jako podstawa, a następnie do niej mocowana jest blachodachówka, co zapewnia estetyczny wygląd i dodatkową ochronę.",
      image: "/images/oferta/blachodachówka1.jpeg",
      image2: "/images/oferta/blachodachówka2.jpeg",
    },
  ];

  // Filter accessories based on slug
  let filteredAccessories = accessories;
  if (slug === "wiaty-smietnikowe") {
    filteredAccessories = accessories.filter(
      (item) => item.key === "rynny" || item.key === "drzwi"
    );
  }

  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <HeroPages>
        <div className="bg-gradient-to-r from-sky-600/90 to-sky-500/80 rounded-lg shadow-xl max-w-5xl mx-auto p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {offer.title}
              </h1>
              <p className="text-white/90 text-sm md:text-base mb-6">
                {offer.description}
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-white/90 text-sm md:text-base">
                  {offer.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroPages>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Główne <span className="text-sky-500">cechy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offer.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sky-500 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="bg-sky-100 rounded-full p-2 mr-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-sky-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Dostępne <span className="text-sky-500">akcesoria</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dostosuj swój produkt do własnych potrzeb dzięki naszym wysokiej jakości akcesoriom
          </p>
          
          <Tabs accessories={filteredAccessories} />
        </div>
      </section>

      {/* Gallery Section */}
      {thisGallery && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
              Galeria <span className="text-sky-500">zdjęć</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Zobacz nasze realizacje i przekonaj się o jakości naszych produktów
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {thisGallery.map((image, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.full_image_url}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={`${offer.title} - zdjęcie ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href={`/galeria?value=${offer.title}`}
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Zobacz więcej zdjęć
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Zainteresowany naszą ofertą?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Skontaktuj się z nami, aby uzyskać bezpłatną wycenę lub zadać pytania dotyczące naszych produktów.
          </p>
          <Link 
            href="/kontakt"
            className="inline-block bg-white text-sky-600 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>
    </div>
  );
}
