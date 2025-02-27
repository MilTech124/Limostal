"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

function Header() {
  const links = [
    {
      link: "/",
      label: "Home",
      icon: HomeIcon
    },
    {
      link: "/oferta",
      label: "Oferta",
      submenu: [
        {
          label: "Nowoczesne Garaże",
          slug: "/oferta/nowoczesne-garaze"
        },
        {
          label: "Garaże z bramą segmentową",
          slug: "/oferta/garaze-z-brama-segmentowa"
        },
        {
          label: "Schowki ogrodowe",
          slug: "/oferta/schowki-ogrodowe"
        },
        {
          label: "Wiaty śmietnikowe",
          slug: "/oferta/wiaty-smietnikowe"
        },
      ]
    },
    {
      link: "/warto-wiedziec",
      label: "Warto wiedzieć",
      submenu: [
        {
          label: "Transport i montaż",
          slug: "/warto-wiedziec#transport"
        },
        {
          label: "Przygotowanie podłoża",
          slug: "/warto-wiedziec#przygotowanie-podloza"
        },
        {
          label: "Kolorystyka",
          slug: "/warto-wiedziec#kolorystyka"
        },
        {
          label: "Bramy",
          slug: "/warto-wiedziec#brama"
        }
      ]
    },
    {
      link: "/galeria",
      label: "Galeria",
    },
    {
      link: "/kontakt",
      label: "Kontakt",
    },
  ];
  
  const garagesLinks = [
    { label: "Nowoczesne garaże", link: `/galeria?value=${'Nowoczesne garaże'}` },
    { label: "Garaże z bramą segmentową", link: `/galeria?value=${'Garaże z bramą segmentową'}` },
    { label: "Nowoczesne garaże z wiatą", link: `/galeria?value=${'Nowoczesne garaże z wiatą'}` },
    { label: "Schowki ogrodowe", link: `/galeria?value=${'Schowki ogrodowe'}` },
    { label: "Wiaty śmietnikowe", link: `/galeria?value=${'Wiaty śmietnikowe'}` }
  ];
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("Home");
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full relative top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className="bg-neutral-800 text-white">
        <div className="container mx-auto flex justify-between items-center h-10 px-4">
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <span>Kamionna 161, 32-732 Kamionna</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="https://www.facebook.com/profile.php?id=100090694156429" 
              target="_blank"
              className="hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </Link>
            <Link 
              href="https://www.instagram.com/limostal/" 
              target="_blank"
              className="hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link 
              href="tel:+48518812110" 
              className="flex items-center hover:text-sky-400 transition-colors"
            >
              <PhoneIcon className="w-4 h-4 mr-1" />
              <span className="hidden md:inline text-sm">518 812 110</span>
            </Link>
            <Link 
              href="mailto:limostal.garaze@gmail.com" 
              className="hidden md:flex items-center hover:text-sky-400 transition-colors"
            >
              <EnvelopeIcon className="w-4 h-4 mr-1" />
              <span className="text-sm">limostal.garaze@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo_poziom.png"
              alt="Limostal Logo"
              width={isScrolled ? 200 : 240}
              height={isScrolled ? 48 : 58}
              className="transition-all duration-300"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 font-medium">
              {links.map((link, index) => (
                <li
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => setSubmenuOpen(index)}
                  onMouseLeave={() => setSubmenuOpen(null)}
                >
                  {link.submenu ? (
                    <>
                      <div className="flex items-center cursor-pointer group">
                        <span className={`${currentLink === link.label ? 'text-sky-500' : 'text-neutral-700'} group-hover:text-sky-500 transition-colors`}>
                          {link.label}
                        </span>
                        <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-300 ${submenuOpen === index ? 'rotate-180 text-sky-500' : 'text-neutral-500 group-hover:text-sky-500'}`} />
                      </div>
                      
                      {/* Submenu */}
                      <div 
                        className={`absolute top-full left-0 w-64 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                          submenuOpen === index 
                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <ul className="py-2">
                          {link.submenu.map((submenu) => (
                            <li key={submenu.slug} className="hover:bg-neutral-50">
                              <Link
                                href={submenu.slug}
                                onClick={() => {
                                  setCurrentLink(submenu.label);
                                  setSubmenuOpen(null);
                                }}
                                className={`block px-4 py-2 text-sm ${
                                  currentLink === submenu.label
                                    ? 'text-sky-500'
                                    : 'text-neutral-700 hover:text-sky-500'
                                } transition-colors`}
                              >
                                {submenu.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.link}
                      onClick={() => setCurrentLink(link.label)}
                      className={`${
                        currentLink === link.label
                          ? 'text-sky-500'
                          : 'text-neutral-700 hover:text-sky-500'
                      } transition-colors`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center">
            {/* CTA Button - visible only on desktop */}
            <Link 
              href="/kontakt" 
              className="hidden md:block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Darmowa wycena
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 ml-4 text-neutral-700 hover:text-sky-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setMobileMenuOpen(false)}>
        <div 
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 overflow-y-auto h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-neutral-800">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="w-6 h-6 text-neutral-500" />
              </button>
            </div>
            
            <nav>
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={link.label} className="py-1">
                    {link.submenu ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index)}
                          className="flex items-center justify-between w-full text-left py-2 text-neutral-700 hover:text-sky-500 transition-colors"
                        >
                          <span>{link.label}</span>
                          <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${mobileSubmenuOpen === index ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === index ? 'max-h-96' : 'max-h-0'}`}>
                          <ul className="pl-4 pt-2 pb-1 space-y-2">
                            {link.submenu.map((submenu) => (
                              <li key={submenu.slug}>
                                <Link
                                  href={submenu.slug}
                                  onClick={() => {
                                    setCurrentLink(submenu.label);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`block py-1 text-sm ${
                                    currentLink === submenu.label
                                      ? 'text-sky-500'
                                      : 'text-neutral-600 hover:text-sky-500'
                                  } transition-colors`}
                                >
                                  {submenu.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.link}
                        onClick={() => {
                          setCurrentLink(link.label);
                          setMobileMenuOpen(false);
                        }}
                        className={`block py-2 ${
                          currentLink === link.label
                            ? 'text-sky-500'
                            : 'text-neutral-700 hover:text-sky-500'
                        } transition-colors`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <Link 
                href="/kontakt" 
                className="block w-full bg-sky-500 hover:bg-sky-600 text-white text-center px-4 py-2 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Darmowa wycena
              </Link>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-neutral-700">
                  <PhoneIcon className="w-5 h-5 mr-3 text-sky-500" />
                  <Link href="tel:+48518812110">518 812 110</Link>
                </div>
                <div className="flex items-center text-neutral-700">
                  <EnvelopeIcon className="w-5 h-5 mr-3 text-sky-500" />
                  <Link href="mailto:limostal.garaze@gmail.com" className="text-sm">
                    limostal.garaze@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <Link 
                    href="https://www.facebook.com/profile.php?id=100090694156429" 
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="https://www.instagram.com/limostal/" 
                    target="_blank"
                    className="bg-gradient-to-tr from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-2 rounded-full transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories Bar */}
      <div className="bg-sky-500 text-white overflow-x-auto whitespace-nowrap">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 py-2">
            {garagesLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.link}
                className="text-sm hover:text-white/80 transition-colors py-1 flex items-center"
              >
                {index > 0 && <span className="w-1 h-1 bg-white/50 rounded-full mr-6 inline-block"></span>}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
