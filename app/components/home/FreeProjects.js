import Image from 'next/image'
import React from 'react'

function FreeProjects() {
  return (
    <div className='flex flex-col pt-10 items-center'>
          <h2 className='text-4xl underline underline-offset-4 md:pb-20 pb-5 '>Darmowe <span className='text-sky-500'>Projekty</span></h2>
          <div className='flex justify-center p-10 max-w-screen-xl max-md:flex-wrap'>
          <div><Image src="/images/projekt.webp" width={1031} height={729} alt='projekt'/></div>
          <div className='flex flex-col gap-5 max-w-lg'>
            <p>W Limostal dbamy o to, aby każdy nasz klient otrzymał pełen obraz swojego przyszłego garażu jeszcze przed rozpoczęciem produkcji. Dlatego do każdego zamówienia dołączamy profesjonalny projekt garażu, który pozwala Ci zobaczyć, jak będzie wyglądać Twój garaż po zakończeniu procesu.</p>
            <p>Nasze projekty garażów uwzględniają wszystkie Twoje preferencje i wymagania. Dzięki nim możesz dostosować wygląd, układ wnętrza i inne szczegóły, zapewniając, że Twój garaż spełni wszystkie Twoje oczekiwania.</p>
            <p> Skorzystaj z naszej usługi projektowania, aby mieć pewność, że Twój garaż będzie idealnie dopasowany do Twoich potrzeb i estetycznych upodobań. Z Limostal otrzymasz nie tylko garaż, ale również kompletny projekt, który pozwoli Ci zobaczyć przyszłość.</p>
          </div>

          </div>
    </div>
  )
}

export default FreeProjects