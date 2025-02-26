import Image from "next/image"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-neutral-300 flex w-full md:px-20 px-5 py-5 md:py-20'>
        <div className='flex w-full max-sm:flex-col justify-between'>

            {/* FIRST COLUMN */}
            <div className="flex flex-col max-w-lg gap-5 text-sm">
                <Image src='/images/logo_poziom.png' alt="logo" width={566} height={137} />
                <div className="flex gap-5 pt-5">
                    <Image src='/images/buss.svg' alt="buss" width={70} height={70} />
                    <div className="flex flex-col gap-2">
                        <p>Nasi pracownicy dokonują DARMOWEGO MONTAŻU
                        naszych produktów po wskazaniu miejsca przez Klienta.</p>
                        <p className="text-red-500">Ważne: Montaż odbędzie się jeśli samochód ciężarowy będzie w stanie 
                        dojechać do wskazanego miejsca.</p>
                    </div>

            
                </div>
            
                <Link className="flex items-center gap-2 pt-5 " href={"/"}><Image src="/info.png"alt="info" width={25} height={25}/> Polityka Prywatnosci</Link>
            </div>

            {/* SECOND COLUMN */}
            <div className="flex flex-col  items-center">
                <div className="md:text-4xl text-white text-center">
                    <p>Masz <span className="text-sky-500">pytanie?</span></p>
                    <p>Chcesz uzyskać <span className="text-sky-500">więcej informacji?</span></p>
                </div>
            
                <div className="text-white pt-10 font-semibold ">
                    <Link className="flex items-center gap-5 hover:scale-105 transition-transform" href={"tel:+48518812110"}>
                        <Image src='/phone.webp' alt="phone" width={70} height={70} />
                        <p>+48 518 812 110</p>
                    </Link>
                    <Link className="flex items-center gap-5 md:pt-5 hover:scale-105 transition-transform" href={"mailto:limostal.garaze@gmail.com"}>
                        <Image src='/mail.webp' width={70} alt="mail" height={70} />
                        <p>limostal.garaze@gmail.com</p>
                    </Link>  

                    <div className="flex gap-5 pt-5">
                    <Link target="_blank" href="https://www.facebook.com/profile.php?id=100090694156429" className="flex items-center gap-2 hover:scale-105 transition-transform"><Image width={40} height={40} alt="face" className="w-10 h-10" src="/facebook.webp"/>Facebook</Link>
                    <Link target="_blank" href="https://www.instagram.com/limostal/" className="flex items-center gap-2 hover:scale-105 transition-transform"><FaInstagram className="w-10 h-10 text-blue-400 hover:text-pink-400" />Instagram</Link>
                    </div>            
                </div>         
                
            </div>
        </div>
    </div>
  )
}

export default Footer