import Navbar from "@/components/Navbar";

export default function Hakkimizda() {
  return (
    <main className="bg-[#f3efe7] min-h-screen px-20 py-10">

      <Navbar />

      <div
  className="
    max-w-[1500px]
    mx-auto
    flex
    items-center
    justify-center
    gap-24
    mt-32
  "
>

        <div className="w-[500px] h-[700px] overflow-hidden rounded-[60px]">

          <img
            src="/studio.png"
            className="w-full h-full object-cover"
          />

        </div>

        <div className="max-w-[650px]">

          <h1 className="text-7xl mb-16">
            Hakkımızda
          </h1>

          <p className="text-[18px] leading-relaxed">
            Yağmur Deniz tarafından 2026 yılının Ocak ayında kurulan Flow Studio, hareketin iyileştirici gücünü herkes için ulaşılabilir ve sürdürülebilir hale getirmek amacıyla kuruldu.
Flow Studio’da yoga, çocuk yogası, anne-çocuk yogası, hamile yogası, stretching, handstand, çocuk cimnastiği ve özel ders branşlarında; her yaşa ve seviyeye uygun dersler sunuyoruz. Her pratiği bedenin ihtiyaçlarına ve kişinin kendi temposuna göre şekillendiriyor, güvenli ve destekleyici bir deneyim oluşturmayı hedefliyoruz.
Stüdyomuz; güçlenmek, esneklik kazanmak, beden farkındalığını artırmak ve günlük hayatın temposundan uzaklaşıp kendine alan açmak isteyen herkes için sakin ve ilham veren bir buluşma noktasıdır.
          </p>

        </div>

      </div>

    </main>
  );
}