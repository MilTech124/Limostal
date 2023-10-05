"use client";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Header() {
  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/oferta",
      label: "Oferta",
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
    { label: "Garaże blaszane", link: "/garaże-blaszane" },
    { label: "Garaże z bramą segmentową", link: "/garaże-z-bramą-segmentową" },
    { label: "Garaże z wiatą", link: "/garaże-z-wiatą" },
    { label: "Schowki ogrodowe", link: "/schowki-ogrodowe" },
    { label: "Wiaty śmietnikowe", link: "/wiaty-śmietnikowe" },
    { label: "Bramy segmentowe", link: "/bramy-segmentowe" },
  ];
  const [menu, setMenu] = useState(false);
  const [currentLink, setCurrentLink] = useState("Home");

  return (
    <header className="w-full relative top-0 z-50">
      <div className="top-contact flex justify-end h-[45px] items-center">
        <Link className="pr-5 hover:scale-105 transition-transform" href="https://www.facebook.com/profile.php?id=100090694156429">
          <Image
            src="/images/facebook.png"
            alt="facebook"
            priority={true}
            width={48}
            height={48}
          />
        </Link>
        <div className="flex items-center text-sm pl-5 h-full md:pr-10 gap-10 bg-sky-500 text-white font-semibold">
          <Link
            className="flex hover:scale-105 transition-transform"
            href="tel:+48 123 456 789"
          >
            <Image
              src="/images/phone.svg"
              alt="phone"
              priority={true}
              width={25}
              height={25}
            />
            <p className="px-5 self-center">Tel: 518 812 110</p>
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
            <p className="px-5 self-center">limostal.garaze@gmail.com</p>
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

        <nav className={menu ? " flex" : "max-sm:hidden"}>
          <ul className="flex max-sm:flex-col gap-10 max-sm:gap-5  font-semibold md:pr-10">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  onClick={() => (setCurrentLink(link.label), setMenu(false))}
                  className={
                    currentLink === link.label
                      ? "text-blue-400"
                      : "hover:text-blue-600 "
                  }
                  href={link.link}
                >
                  {link.label}
                </Link>
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
              className="text-white hover:text-blue-600 text-center  md:py-3"
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
