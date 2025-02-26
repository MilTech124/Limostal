function HeroPages({ title,children}) {
  return (
    <div className="md:h-[600px] h-[300px] md:-mt-14 flex justify-center items-center bg-[url('/images/hero_img4.jpg')] bg-center bg-no-repeat bg-cover relative">
    <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0 "></div>
    <div className="z-10 text-center text-white">
      <h1 className="md:text-6xl text-2xl font-bold text-neutral-300 z-10">{title}</h1>
      {children}
    </div>
   
    </div>
  )
}

export default HeroPages