function HeroPages({ title}) {
  return (
    <div className="md:h-[600px] h-[300px] -mt-14 flex justify-center items-center bg-[url('/images/hero_img.webp')]">
        <h1 className="md:text-6xl text-2xl font-bold text-neutral-300">{title}</h1>
    </div>
  )
}

export default HeroPages