import Link from 'next/link'
import HeroPages from '../components/home/HeroPages'
import MontageSection from '../components/warto-wiedziec/TransportMontage'
import Preparation from '../components/warto-wiedziec/Preparation'
import Kolorystyka from '../components/warto-wiedziec/Kolorystyka'
import GateType from '../components/warto-wiedziec/GateType'

function page() {

  const links = [
    {
      title: "Transport i montaż",
      path:"#transport"
    },{
      title:"Przygotowanie podłoża",
      path:"#przygotowanie-podloza"
    },
    {
      title:"Kolorystyka",
      path:"#kolorystyka"
    },
    {
      title:"Jaką bramę garażową wybrać ?",
      path:"#brama"
    }
  ]

  return (
    <section>
    <HeroPages title={"Warto wiedzieć"}/>

    {/*  TOP BLUE BAR */}
    <div className='bg-sky-500 flex  w-full justify-center py-2 md:gap-5 max-sm:hidden'>
      {links.map((link, index) => (
        <div key={index} className='flex items-center '>
          <Link href={link.path} className='text-white hover:text-sky-600 px-4 py-2 rounded-md text-sm font-medium'>{link.title}</Link>
        </div>
      ))}
    </div>
    {/*  TOP BLUE BAR */}

    <MontageSection/>
    <Preparation/>
    <Kolorystyka/>
    <GateType/>

    </section>
  )
}

export default page