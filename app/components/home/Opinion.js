"use client";

import { StarIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const reviews = [
  {
    name: "Artur Strfanowski",
    role: "Klient indywidualny",
    image: "https://randomuser.me/api/portraits/men/64.jpg", // Zamień na prawdziwe ścieżki do zdjęć
    rating: 5,
    comment:
      `Polecam firmę Limostal. Kontakt wręcz wzorowy ,profesjonalne doradztwo wykonanie garaźu perfekt. Ekipa montująca garaż 11x6 około 5-6 godzin to po prostu rosło w oczach.Z czystym sumieniem można polecać takie firmy jak LIMOSTAL.`
  },
  {
    name: "Kamila Wazydrag",
    role: "Klientka indywidualna",
    image: "https://randomuser.me/api/portraits/women/70.jpg", // Zamień na prawdziwe ścieżki do użytkowników/",
    rating: 5,
    comment:
      `Polecam firmę. Fajne rozwiązania, rzetelność, wycena bardzo dokładna. Realizacja postawienia garażu u nas była w jeden dzień 80m². Czas oczekiwania zadowalający. Kontakt przed i po bez problemu. Doradztwo w projekcie bardzo dobre. Panowie zostawili porządek po montażu. Znają się na swojej pracy.`
  },
  {
    name: "Grzegorz Klonica",
    role: "Klient indywidualny",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 5,
    comment:
      `Solidna firma nie oszczędzają na materiale blacha gruba porządna . Profile ładnie docięte i pospawane . Garaż pięknie wykończony w najmniejszymi szczegółami . Największy szacunek dla monterów szybko sprawnie czysto wysoka kultura osobista pozdrawiam i oczywiście zostawiam 5 gwiazdek`
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Opinie naszych klientów
        </h2>
        <p className="text-gray-600 mb-12">
          Zaufanie naszych klientów to nasz największy sukces. Zobacz, co mówią
          o Limostal!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              {/* Ikona cytatu */}
              <ChatBubbleLeftEllipsisIcon className="absolute top-4 left-4 text-blue-500 w-8 h-8 opacity-20" />

              {/* Dane użytkownika */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover border-2 border-blue-500"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              {/* Treść opinii */}
              <p className="text-gray-600 mb-4">{review.comment}</p>

              {/* Gwiazdki oceny */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-blue-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
