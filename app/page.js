import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#f3efe7] min-h-screen overflow-hidden">

      <Navbar />

      {/* Hero görsel */}
      <section className="relative h-screen">
        <img
          src="/yoga-hero.png"
          className="absolute inset-0 w-full h-full object-cover rounded-bl-[180px]"
        />

        <div className="absolute top-0 left-[15%] h-full flex items-center z-10">
          <div>
            <h1 className="text-[5rem] leading-tight text-black drop-shadow-lg">
              Hareketin
              <br />
              iyileştirici
              <br />
              gücünü keşfet
            </h1>

            <p className="mt-10 text-[1.5rem] max-w-xl text-black drop-shadow-lg">
              Kendine yavaşlayacak, güçlenecek <br />
              ve dengelenecek bir alan yarat.
            </p>

            {/* Buton yazıların altında */}
            <Link href="/hakkimizda">
              <button
                className="
                  mt-12
                  bg-[#efd197]
                  px-[4rem] py-[1rem]
                  rounded-full
                  text-[2rem]
                  hover:scale-105
                  hover:shadow-xl
                  transition
                "
              >
                Stüdyo hakkında
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
