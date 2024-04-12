"use client"
import Circle from "../ui/Circle"
import { Fade } from "react-awesome-reveal";


function WayTo() {
    
    const circles = {
    circle1:{
            image: '/images/Oval.webp',
            alt: 'Oval',
            title:"Kontakt",
            description:`Jesteśmy tu, aby Ci pomóc!
            Numer telefonu: 518 812 110
            Adres e-mail: limostal.garaze@gmail.com`
        },
        circle2:{
            image: '/images/Oval 2.webp',
            alt: 'Oval',
            title:"Doradztwo na najwyższym poziomie",
            description:`Nasi eksperci są gotowi pomóc Ci znaleźć idealny garaż dostosowany do Twoich potrzeb. Skorzystaj z naszej wiedzy i doświadczenia, aby podjąć najlepszą decyzję.`
        },
        circle3:{
            image: '/images/Oval 3.webp',
            alt: 'Oval',
            title:"Wycena",
            description:`Chcesz poznać cenę swojego wymarzonego garażu? Skontaktuj się z nami, a nasi specjaliści dokładnie ocenią Twoje potrzeby i przygotują dla Ciebie indywidualną wycenę. Dzięki nam dowiesz się, że jakość i solidność nie muszą być drogie.`
        },
        circle4:{
            image: '/images/Oval 4.webp',
            alt: 'Oval',
            title:"Zamówienie",
            description:`Zamówienia wymagają precyzyjnego określenia wymiarów, materiałów i dodatkowych opcji. Klient powinien dostarczyć specyfikację potrzeb i preferencji, w tym wybór drzwi, okien czy systemów zabezpieczeń. Dobra komunikacja i jasne oczekiwania gwarantują satysfakcję oraz terminowość realizacji.`
        },
        circle5:{
            image: '/images/Oval 5.webp',
            alt: 'Oval',
            title:"Projekt",
            description:`W Limostal wierzymy, że Twój garaż powinien być wyjątkowy, tak samo jak Ty. Dlatego do każdego zamówienia tworzymy indywidualny projekt. Jesteśmy gotowi spełnić Twoje oczekiwania. Nasze projekty są tworzone z dbałością o każdy detal, zapewniając Ci garaż, który nie tylko będzie funkcjonalny, ale także estetyczny.`
        },
        circle6:{
            image: '/images/Oval 6.webp',
            alt: 'Oval',
            title:"Produkcja",
            description:`W Limostal produkcja garaży to nasza pasja i zaangażowanie. Każdy garaż, który wychodzi spod naszych rąk, jest efektem starannej pracy i dbałości o jakość. Z Limostal otrzymasz nie tylko garaż, ale również pewność, że inwestujesz w produkt o najwyższej jakości. Nasza produkcja to połączenie tradycji rzemieślniczej z nowoczesnym podejściem.`
        },
        circle7:{
            image: '/images/Oval 7.webp',
            alt: 'Oval',
            title:"Transport",
            description:`Dla naszych klientów zapewniamy DARMOWY TRANSPORT. Nasza firma dba o to, aby Twój garaż dotarł do Ciebie w nienaruszonym stanie i zgodnie z ustalonym harmonogramem. Dzięki naszemu transportowi możesz być pewien, że Twój nowy garaż będzie gotowy do użytku w dogodnym dla Ciebie terminie.
            Montaż odbędzie się jeśli samochód ciężarowy będzie w stanie dojechać do wskazanego miejsca.`
        },
        circle8:{
            image: '/images/Oval 8.webp',
            alt: 'Oval',
            title:"Montaż",
            description:`W Limostal rozumiemy, że montaż garażu to kluczowy krok w procesie dostarczania Ci kompletnego rozwiązania. Nasza doświadczona ekipa montażowa zadba o to, aby Twój garaż został zainstalowany solidnie i zgodnie z najwyższymi standardami.`
        },
    }

  return (
    <section className="way-to py-10 w-full"> 
        <h2 className='md:text-5xl text-xl text-right md:pr-10 border-b-4 flex justify-end  text-neutral-400'>Droga do &nbsp;<span className='text-sky-500'>wymarzonego garażu</span></h2>
        <div className="flex flex-wrap justify-center ">
        <div className="flex flex-wrap justify-center max-sm:scale-50 max-sm:mt-[-350px]"> 
            <Circle image={circles.circle1.image}  title={circles.circle1.title} description={circles.circle1.description}/>
            <div className="lg:pt-40"><Circle image={circles.circle2.image}  title={circles.circle2.title} description={circles.circle2.description}/></div>
            <div className="lg:pt-80"><Circle image={circles.circle3.image}  title={circles.circle3.title} description={circles.circle3.description}/></div>      
        </div>
        <div className="flex flex-wrap justify-center max-sm:scale-50 max-sm:mt-[-650px]">
            <div className="lg:pt-20"><Circle image={circles.circle5.image}  title={circles.circle5.title} description={circles.circle5.description}/></div>
            <div className="lg:-mt-20"><Circle image={circles.circle4.image}  title={circles.circle4.title} description={circles.circle4.description}/></div>
            <div className="lg:pt-0  lg:w-[400px]"></div>
        </div>
        
        <div className="flex flex-wrap justify-center max-sm:scale-50 max-sm:mt-[-550px]">
            <div className="lg:pt-0  lg:w-[400px]"></div>   
            <div className="lg:-mt-20"><Circle image={circles.circle6.image}  title={circles.circle6.title} description={circles.circle6.description}/></div>  
            <div className="lg:pt-40"><Circle image={circles.circle7.image}  title={circles.circle7.title} description={circles.circle7.description}/></div>  
        </div>

        <div className="flex flex-wrap  w-full justify-center max-sm:scale-50 max-sm:mt-[-380px]">                
        <div className="lg:-mt-20"><Circle image={circles.circle8.image}  title={circles.circle8.title} description={circles.circle8.description}/></div>  
        </div>
        
   

        </div>

    </section>
  )
}

export default WayTo