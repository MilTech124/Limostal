import React from "react";
import HeroPages from "../../components/home/HeroPages";
import Tabs from "./Tabs"
import axios from "axios";
import Image from "next/image";

export const revalidate = 3600; // ISR co 1 godzinę

const offers = {
  "garaze-z-brama-segmentowa": {
    title: "Garaże z bramą segmentową",
    description:
      "Oferujemy nowoczesne garaże z bramą segmentową, która zapewnia wygodę, bezpieczeństwo i doskonałą izolację termiczną.",
    content:
      "Oferujemy również nowoczesne garaże wyposażone w bramę segmentową, która zapewnia wygodę i bezpieczeństwo użytkowania. Bramy segmentowe cechują się łatwością obsługi, cichą pracą oraz doskonałą izolacją termiczną. Nasze garaże z bramą segmentową to idealne rozwiązanie dla tych, którzy cenią sobie komfort i nowoczesne technologie. Bramy segmentowe otwierane są pionowo, a konstrukcja chowana jest pod dachem. Dzięki temu oszczędzają miejsce zarówno w garażu jak i przed nim. Brama ta stworzona jest z segmentów, połączonych pianką, która chroni przed hałasem oraz przenikaniem powietrza. Standardowo brama wyposażona jest w automat.",
    image: "/images/garaze-z-brama-segmentowa.jpg",
  },
  "schowki-ogrodowe": {
    title: "Schowki ogrodowe",
    description:
      "Praktyczne i estetyczne schowki ogrodowe Limostal, idealne do przechowywania narzędzi, rowerów i innych przedmiotów.",
    content:
      "Nasze schowki ogrodowe to praktyczne i estetyczne rozwiązanie dla każdego ogrodu. Wykonane z wysokiej jakości materiałów, zapewniają trwałość i odporność na warunki atmosferyczne. Schowki ogrodowe Limostal to doskonałe miejsce do przechowywania narzędzi ogrodowych, rowerów czy innych przedmiotów, które potrzebują bezpiecznego schronienia. Mogą być wyposażone w mniejsze bramy uchylne, drzwi dwuskrzydłowe lub pojedyncze drzwi, dzięki temu jest możliwość przechowywania tam motorów, rowerów lub innych większych sprzętów.",
    image: "/images/schowki-ogrodowe.jpg",
  },
  "wiaty-smietnikowe": {
    title: "Wiaty śmietnikowe",
    description:
      "Funkcjonalne i estetyczne wiaty śmietnikowe z trwałych materiałów, które pomagają utrzymać porządek na posesji.",
    content:
      "Wiaty śmietnikowe to funkcjonalne rozwiązanie, które pomaga utrzymać porządek na posesji. Nasze wiaty są wykonane z trwałych materiałów, takich jak lamele – poziome panele z blachy powlekanej. Dzięki temu pojemniki na śmieci są chronione przed niekorzystnymi warunkami atmosferycznymi, a sama konstrukcja z profili zamkniętych wyróżnia się nowoczesnym wyglądem. Wiaty śmietnikowe harmonijnie wpisują się w estetykę Twojej posesji, zapewniając jednocześnie elegancki i schludny wygląd.",
    image: "/images/wiaty-smietnikowe.jpg",
  },
  "nowoczesne-garaze": {
    title: "Nowoczesne Garaże",
    description:
      "Stylowe i trwałe nowoczesne garaże z profili zamkniętych ocynkowanych, które gwarantują odporność na warunki atmosferyczne.",
    content:
      "Nasze nowoczesne garaże charakteryzują się solidną konstrukcją wykonaną z profili zamkniętych ocynkowanych, które gwarantują trwałość i odporność na warunki atmosferyczne. Dzięki eleganckiemu designowi i wysokiej jakości materiałom, nasze garaże doskonale komponują się z każdą posesją, zapewniając nie tylko funkcjonalność, ale i stylowy wygląd. Nity i śruby używane w naszych garażach, wiatach śmietnikowych oraz schowkach ogrodowych są w kolorze blachy. Dzięki temu cała konstrukcja prezentuje się spójnie i elegancko.",
    image: "/images/nowoczesne-garaze.jpg",
  },
};

export async function generateStaticParams() {
  return Object.keys(offers).map((slug) => ({
    slug,
  }));
}

async function getSmallGalery(){
 const data = await axios.get(process.env.NEXT_OFERTS)
 return data.data
}

// Strona dynamiczna na podstawie sluga
export default async function OfferPage({ params }) {
  const { slug } = params;
  const offer = offers[slug];
  const smallGalery = await getSmallGalery()

  const itemsGallery=smallGalery[0].acf.photo_gallery
  const currentGallery = itemsGallery[slug];
  const numberGallery = currentGallery.length;
  const thisGallery = currentGallery[numberGallery-1]
  

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
      image2: "/images/oferta/okno2.jpeg"
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


  return (
    <div>
      <HeroPages>
        <div className="bg-sky-500/70 container md:p-20 p-2 flex flex-col items-center gap-5 text-white ">
          <h2 className="md:text-6xl underline underline-offset-4 md:pb-5 ">
            {offer.title}
          </h2>
          <p className="max-sm:text-xs  ">
            {offer.description}
            {offer.content}  
          </p>
        </div>
      </HeroPages>

     <Tabs accessories={accessories} />

    {thisGallery && (
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
		{thisGallery.map((image, index) => (
			<div key={index} className="p-1">
				<Image
					src={image.full_image_url}
					width={600}
					height={400}
					className="shadow-md w-full h-full object-cover"
          cover
				/>
			</div>
		))}
        </div>
      )}
    </div>
  );
}

