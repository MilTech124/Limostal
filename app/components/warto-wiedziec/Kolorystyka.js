"use client"
import Image from "next/image";
import { Accordion, AccordionItem } from "@heroui/react";

function Kolorystyka() {
  const woodColors = [
    { title: "Złoty dąb", image: "/images/colors/zloty-dab.jpg" },
    { title: "Orzech", image: "/images/colors/orzech.jpg" },
    { title: "Jasny orzech", image: "/images/colors/bielony.webp" },
    { title: "Złoty dąb 3D", image: "/images/colors/3d.jpg" },
  ];

  const colors = [
    { title: "Ciemna wiśnia RAL 3005", image: "/images/ciemna-wisnia.png" },
    { title: "Ciemny brąz RAL 8017", image: "/images/ciemny-braz.png" },
    { title: "Biały RAL 9010", image: "/images/bialy.png" },
    { title: "Jasny brąz RAL 8004", image: "/images/jasny-braz.png" },
    { title: "Ocynk", image: "/images/ocynk.png" },
    { title: "Piasek RAL 1002", image: "/images/piasek.png" },
    { title: "Ciemny grafit RAL 7016", image: "/images/ciemny-grafit.png" },
    { title: "Jasna wiśnia RAL 3011", image: "/images/jasna-wisnia.png" },
    { title: "Ciemny zielony RAL 3020", image: "/images/ciemny-zielony.webp" },
    { title: "Niebieski RAL 5010", image: "/images/niebieski.webp" },
  ];

  const colorsBTX = [
    { title: "Ciemna wiśnia MAT/BTX 3005", image: "/images/ciemna-wisnia-1.webp" },
    { title: "Ciemny brąz MAT/BTX 8017", image: "/images/ciemny-braz-1.webp" },
    { title: "Ciemny Grafit MAT/BTX 7016", image: "/images/ciemny-grafit-1.webp" },
    { title: "Czarny MAT/BTX 7700", image: "/images/czarny.webp" },
    { title: "Ciemny zielony MAT/BTX 6020", image: "/images/ciemny-zielony-1.webp" },
  ];

  return (
    <section id="kolorystyka" className="flex flex-col w-full items-center justify-center py-10 px-2">
      <h2 className="underline decoration-sky-500 md:text-4xl text-2xl text-neutral-400">Kolorystyka</h2>

      <Accordion className="w-full max-w-screen-xl mt-5" defaultExpandedKeys={["Kolory Drewna"]}>
        <AccordionItem title="Kolory Drewna" key={"Kolory Drewna"}>
          <div className="flex flex-wrap justify-between gap-4">
            {woodColors.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={color.image} width={350} height={350} alt={color.title} className="border-2 hover:border-4 w-40 h-20" />
                <p className="text-center text-sky-400 mt-2">{color.title}</p>
              </div>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem title="Kolory RAL">
          <div className="flex flex-wrap justify-between gap-4">
            {colors.map((color, index) => (
              <div key={index} className="flex flex-col items-center w-1/5">
                <img alt={color.title} src={color.image} width={150} height={100} className="border-2 hover:border-4" />
                <p className="text-center text-sky-400 mt-2">{color.title}</p>
              </div>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem title="Kolory MAT/BTX">
          <div className="flex flex-wrap justify-between gap-4">
            {colorsBTX.map((color, index) => (
              <div key={index} className="flex flex-col items-center w-1/5">
                <img alt={color.title} src={color.image} width={150} height={100} className="border-2 hover:border-4" />
                <p className="text-center text-sky-400 mt-2">{color.title}</p>
              </div>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default Kolorystyka;
