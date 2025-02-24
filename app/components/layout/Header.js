"use client";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Header() {
  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/oferta",
      label: "Oferta",
      submenu:[{
        label:"Garaże z bramą segmentową",
        slug:"/oferta/garaze-z-brama-segmentowa"
      },{
        label:"Schowki ogrodowe",
        slug:"/oferta/schowki-ogrodowe"
      },{
        label:"Wiaty śmietnikowe",  
        slug:"/oferta/wiaty-smietnikowe"
      },{
        label:"Nowoczesne Garaże",
        slug:"/oferta/nowoczesne-garaze"
      }
    ]
    },
    {
      link: "/warto-wiedziec",
      label: "Warto wiedzieć",
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
    { label:  "Nowoczesne garaże", link: `/galeria?value=${'Nowoczesne garaże'}` },
    { label: "Garaże z bramą segmentową", link: `/galeria?value=${'Garaże z bramą segmentową'}` },
    { label: "Nowoczesne garaże z wiatą", link: `/galeria?value=${'Nowoczesne garaże z wiatą'}` },
    { label: "Schowki ogrodowe", link: `/galeria?value=${'Schowki ogrodowe'}` },
    { label: "Wiaty śmietnikowe", link: `/galeria?value=${'Wiaty śmietnikowe'}` }  
  ];
  const [menu, setMenu] = useState(false);
  const [currentLink, setCurrentLink] = useState("Home");
  const [submenuOpen, setSubmenuOpen] = useState(null);

  return (
    <header className="w-full relative top-0 z-50">
      <div className="top-contact flex justify-end h-[45px]  items-center">
        <Link target="_blank" className="pr-5  hover:scale-105 transition-transform" href="https://www.facebook.com/profile.php?id=100090694156429">
        <FaFacebook className="w-10 h-10 text-blue-400" />
        </Link>
        <Link href={"https://www.instagram.com/limostal/"} className="pr-5  hover:scale-105 transition-transform">
        <FaInstagram className="w-10 h-10 text-blue-400 hover:text-pink-400" />
        </Link>
        <div className="flex items-center text-sm pl-5 h-full md:pr-10 gap-10 bg-sky-500 text-white font-semibold">
          <Link
            className="flex hover:scale-105 transition-transform"
            href="tel:+48 518 812 110"
          >
            <Image
              src="/images/phone.svg"
              alt="phone"
              priority={true}
              width={25}
              height={25}
            />
            <p className="px-5 max-sm:hidden self-center">Tel: 518 812 110</p>
          </Link>
          <Link
            className="flex hover:scale-105 transition-transform"
            href="mailto:limostal.garaze@gmail.com"
          >
            <Image
              src="/images/mail.svg"
              alt="mail"
              priority={true}
              width={25}
              height={25}
            />
            <p className="px-5 self-center max-sm:hidden">limostal.garaze@gmail.com</p>
          </Link>
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm:gap-5 transition-all justify-between items-center w-full py-5 md:px-10 bg-neutral-200 ">
        <Link href="/">
          <Image
            src="/images/logo_poziom.png"
            alt="logo"
            priority={true}
            width={283}
            height={68}
            className="max-sm:w-40 md:pl-10"
          />
        </Link>

        <nav className={menu ? "flex" : "max-sm:hidden"}>
      <ul className="flex max-sm:flex-col gap-10 max-sm:gap-5 relative font-semibold md:pr-10">
        {links.map((link, index) => (
          <li
            key={link.label}
            className="relative"
            onMouseEnter={() => setSubmenuOpen(index)}
            onMouseLeave={() => setSubmenuOpen(null)}
          >
            {link.submenu ? (
              <>
                {/* Nieklikalny element "Oferta" */}
                <span className="cursor-default hover:text-blue-600">
                  {link.label}
                </span>

                {/* Submenu */}
                {submenuOpen === index && (
                  <ul className="flex flex-col gap-4 absolute top-full left-0 bg-slate-200 p-3 w-40 rounded shadow-md z-10">
                    {link.submenu.map((submenu) => (
                      <li key={submenu.slug}>
                        <Link
                          onClick={() => {
                            setCurrentLink(submenu.label);
                            setMenu(false);
                          }}
                          className={
                            currentLink === submenu.label
                              ? "text-blue-400"
                              : "hover:text-blue-600"
                          }
                          href={submenu.slug}
                        >
                          <span className="cursor-pointer text-sm font-normal w-20">{submenu.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                onClick={() => {
                  setCurrentLink(link.label);
                  setMenu(false);
                }}
                className={
                  currentLink === link.label
                    ? "text-blue-400"
                    : "hover:text-blue-600"
                }
                href={link.link}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
        <div className="hidden max-sm:block absolute right-5 top-20">
          {menu ? (
            <XCircleIcon
              onClick={() => setMenu(!menu)}
              className="h-6 w-6 text-blue-600"
            />
          ) : null}
          {!menu ? (
            <Bars3Icon
              onClick={() => setMenu(!menu)}
              className="h-6 w-6 text-blue-600"
            />
          ) : null}
        </div>
      </div>
      <div className="bg-sky-500 md:p-2 flex gap-1 md:gap-4 text-xs max-w-fit md:pr-5 max-sm:scale-70">
        {garagesLinks.map((link) => (
          <>
            <span className="text-white text-center border-l-2"></span>
            <Link
              className="text-white hover:text-blue-600 text-center  md:py-1"
              key={link.label}
              href={link.link}
            >
              {link.label}
            </Link>
          </>
        ))}
      </div>
    </header>
  );
}

export default Header;
