import Hero from './components/home/Hero'
import WayTo from './components/home/WayTo'
import About from './components/home/About'
import MoreInfos from './components/home/MoreInfos'
import FreeProjects from './components/home/FreeProjects'
import Opinion from './components/home/Opinion'

export default function Home() {
  return (
   <main>
      <Hero />
      <WayTo />
      {/* <About /> */}
      <MoreInfos />
      <Opinion />
    
      {/* <FreeProjects /> */}
   </main>
  )
}
