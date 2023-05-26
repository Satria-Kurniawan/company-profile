import { FaUserCircle } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { MdFormatQuote } from "react-icons/md";

type Testimony = {
  avatar: string;
  customer: string;
  text: string;
};

export default function Testimoni() {
  const testimonies: Testimony[] = [
    {
      avatar: "https://img.freepik.com/free-icon/user_318-159711.jpg",
      customer: "Hasirama Senju",
      text: "Kecepatan layanannya luar biasa! Saya mengirimkan smartphone yang rusak dan dalam waktu singkat, mereka berhasil memperbaikinya dengan hasil yang memuaskan. Saya sangat terkesan dengan keahlian dan ketepatannya",
    },
    {
      avatar: "https://img.freepik.com/free-icon/user_318-159711.jpg",
      customer: "Uciha Madara",
      text: "Tim servis sangat profesional dan efisien dalam menangani masalah pada gadget saya. Mereka dengan cepat mendiagnosis masalah yang terjadi pada perangkat saya dan memberikan penjelasan yang jelas tentang langkah-langkah yang akan diambil untuk memperbaikinya.",
    },
    {
      avatar: "https://img.freepik.com/free-icon/user_318-159711.jpg",
      customer: "Uciha Itachi",
      text: "Tim servis memberikan pelayanan pelanggan yang ramah dan responsif, menjawab semua pertanyaan dan kekhawatiran saya dengan sabar. Secara keseluruhan, saya sangat merekomendasikan servis gadget ini kepada siapa pun yang membutuhkan.",
    },
  ];

  return (
    <main id="testimoni" className="mt-12 min-h-screen">
      <SectionHeader title="Testimoni" subtext="Customer kami berkata." />
      <section className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-16">
        {testimonies.map((testimoni, i) => (
          <div key={i} className="bg-white dark:bg-dark2 rounded-2xl p-5 h-fit">
            <div>
              <FaUserCircle size={50} className="mx-auto mb-3" />
              <h1 className="font-bold text-center mb-5 bg-gradient-primary bg-clip-text text-transparent">
                {testimoni.customer}
              </h1>
              <div>
                <MdFormatQuote size={30} />
                <span className="text-dark2 dark:text-light">
                  {testimoni.text}
                </span>
                <MdFormatQuote size={30} className="ml-auto" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
