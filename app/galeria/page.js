import React from 'react'
import HeroPages from '../components/home/HeroPages'
import Galeria from '../components/Galeria'
import axios from "axios";
import https from 'https';

 const getData = async () => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false // Ignorowanie błędów certyfikatu SSL
  });
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL, {
      httpsAgent: httpsAgent  // Użycie skonfigurowanego agenta HTTPS
    });
    if (response.status !== 200 ) {
        throw new Error(response.statusText)
      }        
 
    return response.data
  
    
  } catch (error) {
    console.error(error);
  }
}
 

async function page() {
    const data = await getData();
  return (
   <section id="galeria">
        <HeroPages title={"Galeria"}/>
        |{!data ? "Ładowanie ..." : <Galeria data={data}/> }
        
   </section>
  )
}

export default page