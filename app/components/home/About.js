"use client"
import Image from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"

function About() {
  return (
    <section id="oferta" className="flex flex-col items-center justify-center bg-sky-500 md:p-10 p-2 text-white">
      <h2 className="md:text-4xl text-2xl max-sm:text-center underline  underline-offset-4">Limostal Producent Nowoczesnych Garaży</h2>
      <h4 className="text-xl">W naszej szerokiej ofercie znajdziesz</h4>
      <div className="flex justify-between pt-10 md:gap-5 flex-wrap">
        <Fade direction="left" triggerOnce>
        <Image src="/images/garaz.webp" alt="img" width={700} height={400} className="  min-w-[250px] object-cover" />
        </Fade>
        <ul className="flex flex-col gap-4">
        <Fade direction="up" delay={600}><li className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Garaże z Wiatą" />Garaże z Wiatą </li></Fade> 
        <Fade direction="up" delay={700}><Link href="/oferta/schowki-ogrodowe" className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Schowki Ogrodowe"/>Schowki Ogrodowe </Link></Fade> 
        <Fade direction="up" delay={800}><Link href="/oferta/garaze-z-brama-segmentowa" className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Garaże Blaszane z Bramą Segmentową" />Garaże Blaszane z Bramą Segmentową</Link></Fade> 
        <Fade direction="up" delay={900}><Link href="/oferta/wiaty-smietnikowe" className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Wiaty Śmietnikowe" />Wiaty Śmietnikowe</Link></Fade> 
        </ul>
      </div>
    </section>
  )
}

export default About