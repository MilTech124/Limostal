import Image from "next/image";
import { Fade } from "react-awesome-reveal";
function Circle({ image, alt, title, description }) {
  return (
    <div className="flex flex-col items-center gap-2 max-w-md group">
      <Fade direction="up" triggerOnce>
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          className="hover:scale-105 transition-all "
        />
      </Fade>
      <Fade triggerOnce direction="up"  delay={500}>
        <Image
          src="/images/Arrow.webp"
          alt={alt ? alt : "oval item"}
          width={50}
          height={50}
          className="group-hover:translate-y-5 transition-all"
        />
      </Fade>
      <Fade triggerOnce direction="up"  delay={1000}>
        <h3 className="text-3xl  group-hover:font-semibold  text-center ">
          {title}
        </h3>
      </Fade>
      <Fade triggerOnce direction="up"  delay={1500}>
        <p className="text-center ">{description}</p>
      </Fade>
    </div>
  );
}

export default Circle;
