import { FaMotorcycle, FaThumbsUp } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Button from "./Button";
import SectionHeader from "./SectionHeader";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

type Service = {
  name: string;
};

type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function Services() {
  const services: Service[] = [
    { name: "Kerusakan LCD/Layar" },
    { name: "Kerusakan Baterai" },
    { name: "Kerusakan Lainnya" },
    { name: "Upgrade SSD, RAM, Hardisk" },
    { name: "Install Windows" },
    { name: "Install Software" },
  ];

  const Benefits: Benefit[] = [
    {
      icon: <FaMotorcycle size={30} />,
      title: "Antar Jemput",
      description:
        "Anda dapat menghemat waktu dan usaha yang diperlukan untuk pergi ke pusat layanan atau toko fisik. Kami akan mengambil gadget Anda, menjalankan diagnosa awal, dan melakukan perbaikan atau perawatan yang diperlukan. Setelah perbaikan selesai, kami akan mengantarkan kembali gadget yang sudah diperbaiki ke lokasi yang Anda inginkan.",
    },
    {
      icon: <FaThumbsUp size={30} />,
      title: "Murah & Berkualitas",
      description:
        "Layanan kami mencakup diagnosa yang komprehensif, penggantian suku cadang yang diperlukan, perbaikan perangkat keras dan perangkat lunak, pemulihan data, serta pembersihan dan perawatan secara menyeluruh. Kami berkomitmen untuk memberikan layanan yang cepat, handal, dan berkualitas tinggi, sehingga Anda dapat kembali menggunakan gadget Anda dalam waktu sesingkat mungkin.",
    },
    {
      icon: <MdHealthAndSafety size={30} />,
      title: "Aman & Nyaman",
      description:
        "Kami memahami betapa pentingnya menjaga kerahasiaan dan integritas data pribadi yang ada pada perangkat Anda. Oleh karena itu, kami menjamin keamanan dan privasi informasi yang Anda berikan kepada kami selama proses servis. Selama perangkat Anda berada dalam perawatan kami, kami memberikan update secara berkala tentang perkembangan servis yang sedang dilakukan. Jika ada perubahan rencana atau perluasan servis yang diperlukan, kami akan berkomunikasi dengan Anda secara jelas dan transparan.",
    },
  ];

  const serviceContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const serviceItem = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main id="layanan" className="md:mt-12 min-h-screen">
      <SectionHeader
        title="Layanan"
        subtext="Quality services with best price."
      />
      <section className="md:flex gap-x-5 mt-16">
        <div className="w-full md:mb-0 mb-5">
          <h1 className="text-xl font-bold mb-5">Melayani</h1>
          <ul className="flex flex-col gap-y-3 mb-5">
            {services.map((service, i) => (
              <li key={i} className="flex gap-x-3 items-center">
                <IoShieldCheckmarkSharp size={20} color="#58F89E" />
                <span className="font-medium">{service.name}</span>
              </li>
            ))}
          </ul>
          <Link to="kontak" smooth={true} offset={-80}>
            <Button variant="primary" text="Gaskan" />
          </Link>
        </div>
        <motion.div
          variants={serviceContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:max-w-[75%] grid md:grid-cols-3 grid-cols-1 gap-3"
        >
          {Benefits.map((benefit, i) => (
            <motion.div
              variants={serviceItem}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              key={i}
              className="bg-white dark:bg-dark2 rounded-2xl p-5 h-fit"
            >
              <div className="w-fit bg-gradient-primary text-white p-3 rounded-2xl mx-auto mb-5">
                {benefit.icon}
              </div>
              <h1 className="text-lg font-bold">{benefit.title}</h1>
              <p className="text-xs text-dark2 dark:text-light leading-5">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
