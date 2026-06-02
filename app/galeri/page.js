"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Galeri() {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/galeri1.jpg",
    "/galeri2.jpg",
    "/galeri3.jpg",
    "/galeri4.jpg",
    "/galeri5.jpg",
    "/galeri6.jpg",
    "/galeri7.jpg",
    "/galeri8.jpg",
  ];

  return (
    <main className="bg-[#f3efe7] min-h-screen px-10 pb-20">

      <Navbar />

      {/* Başlık */}
      <div className="pt-40 pb-20 text-center">

        <h1 className="text-7xl">
          Galeri
        </h1>

        <p className="text-[22px] mt-6 text-[#5b5148]">
          Flow Studio’dan kareler
        </p>

      </div>

      {/* Galeri */}
      <div
        className="
          max-w-[1400px]
          mx-auto
          grid
          grid-cols-2
          gap-10
        "
      >

        {images.map((image, index) => (

          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className="
              overflow-hidden
              rounded-[35px]
              shadow-xl
              group
              cursor-pointer
            "
          >

            <img
              src={image}
              className="
                w-full
                h-[500px]
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />

          </div>

        ))}

      </div>

      {/* Büyük açılan fotoğraf */}
      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed
            inset-0
            bg-black/80
            flex
            items-center
            justify-center
            z-[100]
            p-10
          "
        >

          <img
  src={selectedImage}
  className="
    max-w-[90vw]
    max-h-[90vh]
    object-contain
    rounded-[30px]
    shadow-2xl
  "
/>

        </div>

      )}

    </main>
  );
}