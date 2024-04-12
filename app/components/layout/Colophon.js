import Link from "next/link"


function colophon() {
  return (
<div className="w-full flex justify-between bg-sky-500 md:py-2 px-20 text-white text-xs font-semibold">
   <Link href="http://mil-tech.pl" >Realizacja Mil-TECH</Link>
   <p>© Wszystkie prawa zastrzeżone</p>
</div>  )
}

export default colophon