function MoreInfos() {
  return (
    <div className='bg-[url("/images/tlo.webp")] bg-cover md:p-10 p-5 flex flex-col items-center h-[600px] bg-bottom'>
        <h2 className='text-4xl underline underline-offset-4 md:pb-20 pb-5 '>Przydatne <span className='text-sky-500'>informacje</span></h2>
        <div className='bg-white/50 max-w-2xl md:p-20 p-2 flex flex-col items-center gap-10 '>
            <p >W naszej zakładce "Warto wiedzieć" znajdziesz cenne informacje i porady związane z garażami oraz naszymi usługami. Chcemy, abyś był dobrze poinformowany i mógł podejmować świadome decyzje dotyczące swojego garażu. Dla Twojej wygody przygotowaliśmy artykuły, poradniki i odpowiedzi na często zadawane pytania. Jeśli masz pytania, skorzystaj z tej sekcji lub skontaktuj się z nami, a nasi eksperci chętnie Ci pomogą.</p>
            <button className='btn bg-sky-500 px-10'> Warto wiedzieć</button>
        </div>

    </div>
  )
}

export default MoreInfos