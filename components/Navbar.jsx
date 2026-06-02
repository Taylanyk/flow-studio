"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        w-full
        absolute
        top-0
        left-0
        z-50
      "
    >

      {/* Logo */}
      <Link
        href="/"
        className="
          absolute
          left-6
          top-5
          z-50
        "
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="
            w-[95px]
            object-contain
          "
        />
      </Link>

      {/* Menü */}
      <div
        className="
          w-full
          flex
          justify-center
          pt-8
        "
      >

        <div
          className="
            bg-[#e8e3d9]/90
            backdrop-blur-md
            rounded-full
            px-8
            py-3
            flex
            items-center
            justify-center
            space-x-8
            shadow-xl
          "
        >

          <Link
            href="/"
            className="
              block
              text-[14px]
              whitespace-nowrap
              font-medium
              tracking-wide
              text-[#3d352d]
              px-5
              py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-[#c77d45]
              hover:text-white
            "
          >
            Anasayfa
          </Link>

          <Link
            href="/hakkimizda"
            className="
              block
              text-[14px]
              whitespace-nowrap
              font-medium
              tracking-wide
              text-[#3d352d]
              px-5
              py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-[#c77d45]
              hover:text-white
            "
          >
            Hakkımızda
          </Link>

          <Link
            href="/programlar"
            className="
              block
              text-[14px]
              whitespace-nowrap
              font-medium
              tracking-wide
              text-[#3d352d]
              px-5
              py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-[#c77d45]
              hover:text-white
            "
          >
            Programlar
          </Link>

          <Link
  href="/galeri"
  className="
    block
    text-[14px]
    whitespace-nowrap
    font-medium
    tracking-wide
    text-[#3d352d]
    px-5
    py-2
    rounded-full
    transition-all
    duration-300
    hover:bg-[#c77d45]
    hover:text-white
  "
>
  Galeri
</Link>

          <Link
            href="/iletisim"
            className="
              block
              text-[14px]
              whitespace-nowrap
              font-medium
              tracking-wide
              text-[#3d352d]
              px-5
              py-2
              rounded-full
              transition-all
              duration-300
              hover:bg-[#c77d45]
              hover:text-white
            "
          >
            İletişim
          </Link>

        </div>

      </div>

      {/* Sosyal medya */}
      <div
        className="
          absolute
          right-[40px]
          top-8
          z-50
          flex
          items-center
          gap-5
        "
      >

        <a
          href="https://wa.me/905551827870"
          target="_blank"
        >
          <FaWhatsapp
            className="
              text-[38px]
              text-green-500
              hover:scale-110
              transition
              duration-300
            "
          />
        </a>

        <a
          href="https://www.instagram.com/flowstudio.vema?igsh=NGx1dHQxMTkzajYw"
          target="_blank"
        >
          <FaInstagram
            className="
              text-[38px]
              text-pink-500
              hover:scale-110
              transition
              duration-300
            "
          />
        </a>

      </div>

    </nav>
  );
}