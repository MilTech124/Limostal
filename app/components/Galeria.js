"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Masonry from "react-masonry-css";
import Image from "next/image";


function Galeria({ data }) {
  

  const searchParams = useSearchParams()

  const  value  = searchParams.get('value')

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 2,
    500: 2,
  };

  const garages = [
    "Nowoczesne garaże",
    "Garaże z bramą segmentową",
    "Schowki ogrodowe",
    "Nowoczesne garaże z wiatą",
    "Wiaty śmietnikowe",
  ];

  const [active, setActive] = useState(value || garages[0]);

  const [urlImage, setUrlImage] = useState(null);
  const galeria = data[0].acf.photo_gallery;
  const [obecna, setObecna] = useState(galeria.nowoczesne_garaze[0]);


  const currentGallery = () => {
    if (active === garages[0]) {
      return setObecna(galeria.nowoczesne_garaze[0]);
    }
    if (active === garages[1]) {
      return setObecna(galeria.garaze_z_brama[1]);
    }
    if (active === garages[2]) {
      return setObecna(galeria.schowki_ogrodowe[2]);
    }
    if (active === garages[3]) {
      return setObecna(galeria.nowoczesne_garaze_z_wiata[3]);
    }
    if (active === garages[4]) {
      return setObecna(galeria.wiaty_smietnikowe[4]);
    }
  };
  useEffect(() => {
    currentGallery();   
  }, [active,value]);

  useEffect(() => {{
    if(value){
      setActive(value)
    }
  
  }}, [value])



  return (
    <div className="relative">
      {urlImage && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50">
          <Image
            src={urlImage}
            width={1920}
            height={1080}
            className="h-full w-full cursor-zoom-out"
            onClick={() => setUrlImage(null)}
            alt="garaże"
          />
        </div>
      )}

      <div className="w-full bg-sky-500 flex justify-center">
        {garages.map((garage, index) => (
          <button
            key={index}
            onClick={() => setActive(garage)}
            className={`${
              active === garage ? " text-sky-300" : "text-white"
            } px-4 py-2 rounded-md text-sm font-medium`}
          >
            {garage}
          </button>
        ))}
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {obecna.map((image, index) => (
          <div key={index}>
            <Image
              src={image.thumbnail_image_url}
              width={600}
              height={400}
              className="shadow-md cursor-zoom-in"
              onClick={() => setUrlImage(image.full_image_url)}
              alt={image.id}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Galeria;
