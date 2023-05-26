import SectionHeader from "./SectionHeader";
import ProfilePict from "../assets/images/3d-illustration-person-with-sunglasses_23-2149436188-removebg-preview.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main id="about" className="mt-12 min-h-screen">
      <SectionHeader title="Tentang" subtext="Profil pemilik usaha." />
      <section className="md:flex gap-x-10 mt-16">
        <div className="md:w-[40%]">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.5,
              stiffness: 300,
              damping: 10,
            }}
            src={ProfilePict}
            alt="profile"
            className="rounded-2xl"
            width="640"
            height="360"
          />
        </div>
        <div className="md:w-[60%] md:mt-28 mt-10">
          <h1 className="md:text-4xl text-2xl font-bold mb-3">
            Founder AputStore
          </h1>
          <h2 className="text-xl font-semibold mb-3">Edi Narendra</h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mt-3 mb-5" />
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
            <div>
              <p className="text-dark2 dark:text-light">
                Sejak kecil, aku sudah tertarik dengan dunia teknologi dan
                bercita-cita menjadi pahlawan bagi semua gadget yang bermasalah.
                Jadi, aku memutuskan untuk mengambil risiko dan membuka bisnis
                servis gadget.
              </p>
            </div>
            <div>
              <p className="text-dark2 dark:text-light">
                Dari layar retak yang terlihat seperti mozaik modern, baterai
                yang menguap seperti asap sosis bakar, hingga masalah software
                yang bikin perangkatmu bingung seperti kucing yang kehilangan
                jalan pulang, aku siap memperbaikinya!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
