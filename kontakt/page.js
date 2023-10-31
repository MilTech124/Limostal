import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex max-sm:flex-col justify-center items-center gap-5 py-10 ">
      <div className="max-sm:w-[200px] flex items-center">
        <Image src="/images/logo_pion.png" width={500} height={510} />
      </div>
      <div className="flex flex-col items-center max-w-screen-md text-neutral-400 text-center">
        <h1 className="md:text-6xl text-3xl font-semibold">Kontakt</h1>
        <p className="pt-5 max-w-screen-sm">
          Z przyjemnością jesteśmy do Twojej dyspozycji, aby odpowiedzieć na
          Twoje pytania i udzielić niezbędnych informacji. Skontaktuj się z
          nami, a nasz zespół pomoże Ci w wyborze idealnego garażu oraz udzieli
          wszelkich niezbędnych informacji dotyczących naszych usług.
        </p>
        <div>
            <div className="flex items-center gap-5 pt-5 text-blue-500">
            <Image src="/images/clock.png" width={50} height={50} />
                <p>Czynne pn-pt 7-17 , sb 7-14</p>
            </div>
            <Link href="tel:518812110" className="flex items-center gap-5 pt-5 text-blue-500">
            <Image src="/phone.webp" width={50} height={50} />
                <p>+48 518 812 110</p>
            </Link>
            <Link href="mailto:limostal.garaze@gmail.com" className="flex items-center gap-5 pt-5 text-blue-500">
                <Image src="/mail.webp" width={50} height={50} />
                <p>limostal.garaze@gmail.com</p>
            </Link>
        </div>
        
      </div>
    </div>
  );
}

export default page;
