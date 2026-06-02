import Navbar from "@/components/Navbar";

export default function Iletisim() {
  return (
    <main className="bg-[#f3efe7] min-h-screen px-20 py-10">

      <Navbar />

      <h1 className="text-7xl text-center mt-24">
        Flow Studio ile iletişime geç
      </h1>

      <div
  className="
    max-w-[1500px]
    mx-auto
    flex
    justify-center
    items-center
    gap-24
    mt-24
  "
>

        {/* Harita */}
        <div className="w-[550px] h-[550px] rounded-[25px] overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.5085798965645!2d29.299011228561827!3d40.8491702982034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd80732c61e1%3A0x35fd9f3d6098712!2sFlow%20Studio!5e0!3m2!1str!2str!4v1779884612073!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

        {/* Yazılar */}
        <div
  className="
    max-w-[700px]
    flex
    flex-col
    items-center
  "
>

          <p className="text-3xl leading-relaxed text-center">
            Programlarımız, özel derslerimiz ve
            stüdyo hakkında merak ettiğin her şey için
            bizimle iletişime geçebilirsin.
          </p>

          <a
            href="https://wa.me/905551827870"
            target="_blank"
            >
            <button
                className="
                  mt-24
                  bg-[#efd197]
                  px-16
                  py-6
               rounded-full
                 text-3xl
                hover:scale-105
               hover:shadow-xl
               transition
             "
            >
                Bizimle İletişime Geçin
            </button>
            </a>

        </div>

      </div>

    </main>
  );
}