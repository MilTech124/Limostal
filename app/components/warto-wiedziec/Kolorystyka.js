import Image from "next/image"

function Kolorystyka() {
  const  woodColors = [
        {
            title: "Ciemny orzech",
            image: "/images/ciemny-orzech.png"
        },{
            title: "Złoty dąb",
            image: "/images/zloty-dab.png"
        },{
            title: "Jasny orzech",
            image: "/images/jasny-orzech.png"
        }
    ]
  const  colors=[
        {
            title: "Ciemna wiśnia",
            image: "/images/ciemna-wisnia.png"
        },
        {
            title: "Ciemny brąz",
            image: "/images/ciemny-braz.png"
        },{
            title: "Biały",
            image: "/images/bialy.png"
        },{
            title: "Jasny brąz",
            image: "/images/jasny-braz.png"
        },{
            title: "Ocynk",
            image: "/images/ocynk.png"
        },{
            title: "Piasek",
            image: "/images/piasek.png"
        },{
            title: "Ciemny grafit",
            image: "/images/ciemny-grafit.png"
        },{
            title: "Jasna wiśnia",
            image: "/images/jasna-wisnia.png"
        }
    ]

  return (
    <section id="kolorystyka" className="flex flex-col w-full items-center justify-center py-10 px-2">
       <h2 className="underline decoration-sky-500 md:text-4xl text-2xl text-neutral-400 ">Kolorystyka</h2> 

       {/* THREE WOODCOLORS */}
        <div className="flex w-full max-w-screen-xl justify-between pt-5">
            {woodColors.map((color, index) => (
                <div key={index} className="flex flex-col items-center justify-center ">
                    <Image src={color.image} width={350} height={350} alt="colors" className="border-2 hover:border-4"/>
                    <p className="text-center  text-sky-400">{color.title}</p>
                </div>
            ))}           
        </div>
        {/* THREE WOODCOLORS */}

        {/* COLORS */}
        <div className="flex w-full flex-wrap max-w-screen-xl justify-between pt-5">
            {colors.map((color, index) => (
                <div key={index} className="flex flex-col items-center justify-center w-1/4 ">
                    <Image alt="colors" src={color.image} width={268} height={250} className="border-2  hover:border-4"/>
                    <p className="text-center  text-sky-400">{color.title}</p>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Kolorystyka