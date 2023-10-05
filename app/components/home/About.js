import Image from "next/image"

function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-500 md:p-10 p-2 text-white">
      <h2 className="text-4xl underline  underline-offset-4">Limostal Producent Nowoczesnych Garaży</h2>
      <h4 className="text-xl">W naszej szerokiej ofercie znajdziesz</h4>
      <div className="flex justify-between pt-10 md:gap-5 flex-wrap">
        <Image src="/images/garaz.webp" alt="img" width={757} height={341} className=" w-3/5 min-w-[250px] object-cover" />
        <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Garaże Blaszane " />Garaże Blaszane </li>
        <li className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Garaże Blaszane z Bramą Segmentową" />Garaże Blaszane z Bramą Segmentową</li>
        <li className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Garaże z Wiatą" />Garaże z Wiatą </li>
        <li className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Schowki Ogrodowe"/>Schowki Ogrodowe </li>
        <li className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Wiaty Śmietnikowe" />Wiaty Śmietnikowe</li>
        <li className="flex items-center gap-2"><Image src="/images/sarrow.svg" width={40} height={40} alt="Bramy Segmentowe" />Bramy Segmentowe </li>
        </ul>
      </div>
    </div>
  )
}

export default About