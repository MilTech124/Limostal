import Image from 'next/image'
import React from 'react'

function FreeProjects() {
  return (
    <div className='flex flex-col pt-10 items-center'>
          <h2 className='text-4xl underline underline-offset-4 md:pb-20 pb-5 '>Darmowe <span className='text-sky-500'>Projekty</span></h2>
          <div className='flex justify-center p-10 max-w-screen-xl max-md:flex-wrap'>
          <div><Image src="/images/projekt.webp" width={1031} height={729} alt='projekt'/></div>
          <div className='flex flex-col gap-5 max-w-lg'>
        <p>
        W Limostal dbamy o to, aby każdy klient otrzymał pełen obraz przyszłego
garażu przed rozpoczęciem produkcji. Do każdego zamówienia dołączamy profesjonalny
projekt, uwzględniający wszystkie preferencje i wymagania. Nasze projekty pozwalają
dostosować wygląd, układ wnętrza i inne szczegóły, zapewniając, że garaż spełni oczekiwania.
Skorzystaj z naszej usługi projektowania, aby mieć pewność, że garaż będzie idealnie
dopasowany do Twoich potrzeb. Z Limostal otrzymasz nie tylko garaż, ale i kompletny projekt
przyszłości.
        </p>
          </div>

          </div>
    </div>
  )
}

export default FreeProjects