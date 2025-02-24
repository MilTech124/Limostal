function HeroPages({ title,children}) {
  return (
    <div className="md:h-[600px] h-[300px] md:-mt-14 flex justify-center items-center bg-[url('/images/hero_img.webp')]">
        <h1 className="md:text-6xl text-2xl font-bold text-neutral-300">{title}</h1>
        {children}
    </div>
  )
}

export default HeroPages