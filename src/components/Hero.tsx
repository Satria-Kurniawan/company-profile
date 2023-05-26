import Button from "./Button";
import Img1 from "../assets/images/circuit-board-glove-electric-equipment-isolated-white-background.webp";
import Img2 from "../assets/images/close-up-male-technician-holding-modern-computer-motherboard-from-table.webp";
import Img3 from "../assets/images/installing-bar-load-waiting-indicator-concept.webp";
import Img4 from "../assets/images/young-woman-cleaning-her-laptop-key-board.webp";
import Img5 from "../assets/images/close-up-circuit-board-repair.webp";
import Img6 from "../assets/images/pexels-anna-shvets-3987020.webp";
import Img7 from "../assets/images/pexels-cottonbro-studio-4065906.webp";
import HeroImagesMobile from "./HeroImagesMobile";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
  const title =
    "Jadikan aktivitasmu lebih lancar dengan gadget yang selalu siap menemani";

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const titleItem = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main id="hero" className="md:mt-12 mt-7 md:h-[120vh] h-screen">
      <section className="md:max-w-[60vw] mx-auto mb-10">
        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate={"visible"}
          className="font-bold md:text-5xl text-3xl text-center flex gap-x-3 flex-wrap justify-center"
        >
          {title.split(" ").map((char) => (
            <motion.span
              variants={titleItem}
              // transition={{ type: "spring", stiffness: 300, damping: 10 }}
              key={char}
              className={`${
                char === "gadget" &&
                "bg-gradient-primary text-transparent bg-clip-text"
              }
              `}
            >
              {char}
            </motion.span>
          ))}
          {/* Jadikan aktivitasmu lebih lancar dengan{" "}
          <span className="bg-gradient-primary text-transparent bg-clip-text">
            gadget
          </span>{" "}
          yang selalu siap menemani */}
        </motion.div>
        <p className="text-dark2 dark:text-light text-center mt-5">
          Percayakan gadgetmu pada kami dan nikmati pengalaman teknologi yang
          mulus semulus karir Messi. Kami di sini untuk menjaga perangkat
          elektronikmu tetap berfungsi dengan sempurna. Dapatkan solusi cepat
          dan terpercaya dengan sentuhan magis dari kami.
        </p>
        <div className="flex gap-x-2 justify-center mt-5">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="layanan" smooth={true} offset={-80}>
              <Button variant="primary" text="Let's Go" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="kontak" smooth={true} offset={-80}>
              <Button variant="secondary" text="Hubungi" />
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="md:flex hidden gap-x-3 items-center w-fit mx-auto">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.5,
            stiffness: 300,
            damping: 10,
          }}
          src={Img6}
          alt="Laptop"
          width="160"
          height="284.444444444"
          className="rounded-xl h-48"
        />
        <div className="flex flex-col gap-y-3">
          <motion.img
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.5,
              stiffness: 300,
              damping: 10,
            }}
            src={Img2}
            alt="Laptop"
            width="160"
            height="284.444444444"
            className="rounded-xl"
          />
          <motion.img
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.5,
              stiffness: 300,
              damping: 10,
            }}
            src={Img3}
            alt="Laptop"
            width="160"
            height="90"
            className="rounded-xl"
          />
        </div>
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.5,
            stiffness: 300,
            damping: 10,
          }}
          src={Img1}
          alt="Laptop"
          width="280"
          height="157.5"
          className="rounded-xl"
        />
        <div className="flex flex-col gap-y-3">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.5,
              stiffness: 300,
              damping: 10,
            }}
            src={Img4}
            alt="Laptop"
            width="160"
            height="284.444444444"
            className="rounded-xl"
          />
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.5,
              stiffness: 300,
              damping: 10,
            }}
            src={Img5}
            alt="Laptop"
            width="160"
            height="90"
            className="rounded-xl"
          />
        </div>
        <motion.img
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 0.5,
            stiffness: 300,
            damping: 10,
          }}
          src={Img7}
          alt="Laptop"
          width="160"
          height="284.444444444"
          className="rounded-xl h-48"
        />
      </section>
      <HeroImagesMobile />
    </main>
  );
}
