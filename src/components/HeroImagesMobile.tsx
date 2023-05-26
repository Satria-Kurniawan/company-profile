import Img1 from "../assets/images/circuit-board-glove-electric-equipment-isolated-white-background.webp";
import Img2 from "../assets/images/close-up-male-technician-holding-modern-computer-motherboard-from-table.webp";
import Img3 from "../assets/images/installing-bar-load-waiting-indicator-concept.webp";
import { motion } from "framer-motion";

export default function HeroImagesMobile() {
  return (
    <main className="md:hidden block">
      <section className="grid grid-cols-2 gap-3">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.5,
            stiffness: 300,
            damping: 10,
          }}
          src={Img1}
          alt="Laptop"
          className="rounded-xl rounded-r-none row-span-2 h-full"
        />
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.5,
            stiffness: 300,
            damping: 10,
          }}
          src={Img2}
          alt="Laptop"
          className="rounded-tr-xl"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.5,
            stiffness: 300,
            damping: 10,
          }}
          src={Img3}
          alt="Laptop"
          className="rounded-br-xl"
        />
      </section>
    </main>
  );
}
