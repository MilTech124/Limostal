"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  TruckIcon, 
  InformationCircleIcon,
  MapPinIcon,
  ArrowRightIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-neutral-800 to-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="">
            <div className="bg-white p-3 rounded-lg inline-block">
              <Image 
                src="/images/logo_poziom.png" 
                alt="Limostal Logo" 
                width={200} 
                height={48} 
                className="h-auto"
              />
            </div>
            <p className="text-lg font-bold pt-2">Paweł Smoter</p>
            <p className="text-sm font-semibold pt-0 mt-0">LIMOSTAL NOWOCZESNE GARAŻE</p>
            <p className="text-gray-300 text-sm pt-2">
              Specjalizujemy się w produkcji wysokiej jakości garaży blaszanych, 
              oferując kompleksową obsługę od projektu po montaż.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/profile.php?id=100090694156429" 
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/limostal/" 
                target="_blank"
                className="bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 p-2 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-sky-500 pb-2 inline-block">Szybkie linki</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/oferta" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/warto-wiedziec" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Warto wiedzieć
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-sky-500 pb-2 inline-block">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Limostal<br />
                  Kamionna 161<br />
                  32-732 Kamionna
                </span>
              </li>
              <li>
                <Link href="tel:+48518812110" className="flex items-center group">
                  <PhoneIcon className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 group-hover:animate-pulse" />
                  <span className="text-gray-300 group-hover:text-sky-400 transition-colors duration-300">+48 518 812 110</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:limostal.garaze@gmail.com" className="flex items-center group">
                  <EnvelopeIcon className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 group-hover:animate-pulse" />
                  <span className="text-gray-300 group-hover:text-sky-400 transition-colors duration-300">limostal.garaze@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Godziny otwarcia i Mapa */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-sky-500 pb-2 inline-block flex items-center">
              <ClockIcon className="w-5 h-5 mr-2 text-sky-500" />
              Godziny otwarcia
            </h3>
            <ul className="space-y-2 text-gray-300 ml-7">
              <li className="flex justify-between">
                <span>Poniedziałek - Piątek:</span>
                <span className="font-medium">8:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota:</span>
                <span className="font-medium">9:00 - 13:00</span>
              </li>
              <li className="flex justify-between">
                <span>Niedziela:</span>
                <span className="font-medium">Zamknięte</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold border-b border-sky-500 pb-2 inline-block mt-6 flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-sky-500" />
              Nasza lokalizacja
            </h3>
            <div className="rounded-lg overflow-hidden border border-neutral-600 h-[200px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5774237218716!2d20.5114!3d49.9714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471645e5b4e41b67%3A0x2d7a6d8913a3bd8e!2sKamionna%20161%2C%2032-732%20Kamionna!5e0!3m2!1spl!2spl!4v1614178293017!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Mapa lokalizacji Limostal"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-sky-500/80 text-white text-center py-1 text-sm">
                Kamionna 161, 32-732 Kamionna
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Info Banner */}
      <div className="bg-neutral-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="bg-sky-500 p-3 rounded-full">
              <TruckIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">
                Nasi pracownicy dokonują <span className="text-sky-400 font-bold">DARMOWEGO MONTAŻU</span> naszych produktów po wskazaniu miejsca przez Klienta.
              </p>
              <p className="text-red-400 text-sm mt-1">
                Ważne: Montaż odbędzie się jeśli samochód ciężarowy będzie w stanie dojechać do wskazanego miejsca.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Limostal. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center mt-3 md:mt-0">
              <Link href="/" className="hover:text-sky-400 transition-colors duration-300 flex items-center">
                <InformationCircleIcon className="w-4 h-4 mr-1" />
                Polityka Prywatności
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
