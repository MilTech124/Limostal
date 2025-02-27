import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function Circle({ image, alt, title, description, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-2 max-w-md group ${className}`}>
      <Fade direction="up" triggerOnce>
        <Image
          src={image}
          alt={alt || "circle image"}
          width={220}
          height={220}
          className="hover:scale-105 transition-all w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] object-cover"
        />
      </Fade>
      <Fade triggerOnce direction="up" delay={300}>
        <Image
          src="/images/Arrow.webp"
          alt="arrow"
          width={40}
          height={40}
          className="group-hover:translate-y-3 transition-all w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
        />
      </Fade>
      <Fade triggerOnce direction="up" delay={600}>
        <h3 className="text-xl sm:text-2xl md:text-3xl group-hover:font-semibold text-center">
          {title}
        </h3>
      </Fade>
      <Fade triggerOnce direction="up" delay={900}>
        <p className="text-center text-sm sm:text-base">{description}</p>
      </Fade>
    </div>
  );
}

export default Circle;
