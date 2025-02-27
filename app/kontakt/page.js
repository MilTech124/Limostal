"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeroPages from "../components/home/HeroPages";
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon, 
  MapPinIcon,
  BuildingOfficeIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Wystąpił błąd podczas wysyłania wiadomości');
      }
      
      // Handle success
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroPages>
        <div className="bg-gradient-to-r from-sky-600/90 to-sky-500/80 rounded-lg shadow-xl max-w-5xl mx-auto p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Kontakt
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
              Z przyjemnością jesteśmy do Twojej dyspozycji, aby odpowiedzieć na
              Twoje pytania i udzielić niezbędnych informacji. Skontaktuj się z
              nami, a nasz zespół pomoże Ci w wyborze idealnego garażu oraz udzieli
              wszelkich niezbędnych informacji dotyczących naszych usług.
            </p>
          </div>
        </div>
      </HeroPages>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <BuildingOfficeIcon className="w-6 h-6 text-sky-500 mr-2" />
                Informacje kontaktowe
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-sky-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Adres</h3>
                    <p className="text-gray-600">
                      Limostal<br />
                      Kamionna 161<br />
                      32-732 Kamionna
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-sky-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefon</h3>
                    <Link 
                      href="tel:+48518812110" 
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      +48 518 812 110
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <EnvelopeIcon className="w-6 h-6 text-sky-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <Link 
                      href="mailto:limostal.garaze@gmail.com" 
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      limostal.garaze@gmail.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-sky-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Godziny otwarcia</h3>
                    <p className="text-gray-600">Poniedziałek - Piątek: 8:00 - 16:00</p>
                    <p className="text-gray-600">Sobota: 9:00 - 13:00</p>
                    <p className="text-gray-600">Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">Znajdź nas w mediach społecznościowych</h3>
                <div className="flex space-x-4">
                  <Link 
                    href="https://www.facebook.com/profile.php?id=100090694156429" 
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://www.instagram.com/limostal/" 
                    target="_blank"
                    className="bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-2 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Company Logo */}
            <div className="bg-white rounded-lg shadow-md p-8 flex justify-center">
              <Image 
                src="/images/logo_pion.png" 
                width={300} 
                height={300} 
                alt="Limostal Logo"
                className="h-auto"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Wyślij wiadomość
            </h2>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                <p className="font-medium">Dziękujemy za wiadomość!</p>
                <p>Odpowiemy najszybciej jak to możliwe.</p>
              </div>
            ) : submitError ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                <p className="font-medium">Wystąpił błąd!</p>
                <p>Spróbuj ponownie później lub skontaktuj się z nami telefonicznie.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </>
                ) : (
                  <>
                    Wyślij wiadomość
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Nasza <span className="text-sky-500">lokalizacja</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Znajdź nas pod adresem: Kamionna 161, 32-732 Kamionna
          </p>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5774237218716!2d20.5114!3d49.9714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471645e5b4e41b67%3A0x2d7a6d8913a3bd8e!2sKamionna%20161%2C%2032-732%20Kamionna!5e0!3m2!1spl!2spl!4v1614178293017!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Mapa lokalizacji Limostal"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 bg-sky-500/80 text-white text-center py-3">
              <p className="font-medium">Kamionna 161, 32-732 Kamionna</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
