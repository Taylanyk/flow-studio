"use client";

import Navbar from "@/components/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const programs = [
  {
    title: "Yoga",
    image: "/yoga1.png",
    desc: "Bedeni güçlendiren, esnekliği artıran ve zihinsel dengeyi destekleyen bütünsel bir hareket pratiği.",
  },

  {
    title: "Çocuk Yogası",
    image: "/kids.png",
    desc: "Çocukların beden farkındalığını, odaklanmasını ve özgüvenini destekleyen  eğlenceli yoga dersleri.",
  },

  {
    title: "Handstand",
    image: "/handstand.png",
    desc: "Denge, güç ve kontrol gelişimini destekleyen ters duruş antrenmanları.",
  },

  {
    title: "Hamile Yogası",
    image: "/pregnant.png",
    desc: "Hamilelik sürecinde bedeni destekleyen, nefes ve rahatlama odaklı güvenli yoga çalışmaları.",
  },

  {
    title: "Stretching",
    image: "/stretching.png",
    desc: "Kasları esnetmeye, hareket kabiliyetini artırmaya ve bedeni rahatlatmaya yönelik çalışmalar.",
  },

  {
    title: "Anne-Çocuk Yogası",
    image: "/mother-kid.png",
    desc: "Anne ve çocuğun birlikte kaliteli zaman geçirirken hareket ettiği keyifli ve bağ kurmaya destek olan pratikler.",
  },
];

export default function Programlar() {
  return (
    <main className="bg-[#f3efe7] min-h-screen px-10 py-20">

      <Navbar />

      <h1 className="text-7xl text-center mt-24 mb-20">
        Programlar
      </h1>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {programs.map((program, index) => (
          <SwiperSlide key={index}>

            <div
              className="
                bg-[#efd197]
                rounded-[45px]
                p-8
                min-h-[760px]
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-4
                hover:shadow-2xl
                hover:scale-[1.02]
            "
            >
              <div className="overflow-hidden rounded-[35px]">

                <img
                  src={program.image}
                  className="
                  w-full
                  h-[450px]
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
                />

              </div>

              <h2 className="text-4xl mt-6">
                {program.title}
              </h2>

              <p className="mt-4 text-lg text-gray-700">
                {program.desc}
              </p>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </main>
  );
}