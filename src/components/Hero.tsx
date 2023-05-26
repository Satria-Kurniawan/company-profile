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

export default function Hero() {
  return (
    <main id="hero" className="md:mt-12 mt-7 md:h-[120vh] h-screen">
      <section className="md:max-w-[60vw] mx-auto mb-10">
        <h1 className="font-bold md:text-5xl text-3xl text-center">
          Jadikan aktivitasmu lebih lancar dengan{" "}
          <span className="bg-gradient-primary text-transparent bg-clip-text">
            gadget
          </span>{" "}
          yang selalu siap menemani
        </h1>
        <p className="text-dark2 dark:text-light text-center mt-5">
          Percayakan gadgetmu pada kami dan nikmati pengalaman teknologi yang
          mulus semulus karir Messi. Kami di sini untuk menjaga perangkat
          elektronikmu tetap berfungsi dengan sempurna. Dapatkan solusi cepat
          dan terpercaya dengan sentuhan magis dari kami.
        </p>
        <div className="flex gap-x-2 justify-center mt-5">
          <Link to="layanan" smooth={true} offset={-80}>
            <Button variant="primary" text="Let's Go" />
          </Link>
          <Link to="kontak" smooth={true} offset={-80}>
            <Button variant="secondary" text="Hubungi" />
          </Link>
        </div>
      </section>
      <section className="flex gap-x-3 items-center w-fit mx-auto">
        <img
          src={Img6}
          alt="Laptop"
          width="160"
          height="284.444444444"
          className="rounded-xl h-48"
        />
        <div className="flex flex-col gap-y-3">
          <img
            src={Img2}
            alt="Laptop"
            width="160"
            height="284.444444444"
            className="rounded-xl"
          />
          <img
            src={Img3}
            alt="Laptop"
            width="160"
            height="90"
            className="rounded-xl"
          />
        </div>
        <img
          src={Img1}
          alt="Laptop"
          width="280"
          height="157.5"
          className="rounded-xl"
        />
        <div className="flex flex-col gap-y-3">
          <img
            src={Img4}
            alt="Laptop"
            width="160"
            height="284.444444444"
            className="rounded-xl"
          />
          <img
            src={Img5}
            alt="Laptop"
            width="160"
            height="90"
            className="rounded-xl"
          />
        </div>
        <img
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
