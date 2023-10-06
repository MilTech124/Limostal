import React from 'react'
import HeroPages from '../components/home/HeroPages'
import Galeria from '../components/Galeria'
import axios from "axios";

const getData = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL);
    return response.data;
  }

async function page() {
    const data = await getData();
  return (
   <section className="galeria">
        <HeroPages title={"Galeria"}/>
        <Galeria data={data}/>
   </section>
  )
}

export default page