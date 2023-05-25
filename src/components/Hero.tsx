import Button from "./Button";
import Img1 from "../assets/images/circuit-board-glove-electric-equipment-isolated-white-background.webp";
import Img2 from "../assets/images/close-up-male-technician-holding-modern-computer-motherboard-from-table.webp";
import Img3 from "../assets/images/installing-bar-load-waiting-indicator-concept.webp";
import Img4 from "../assets/images/young-woman-cleaning-her-laptop-key-board.webp";
import Img5 from "../assets/images/close-up-circuit-board-repair.webp";
import Img6 from "../assets/images/pexels-anna-shvets-3987020.webp";
import Img7 from "../assets/images/pexels-cottonbro-studio-4065906.webp";
import HeroImagesMobile from "./HeroImagesMobile";

export default function Hero() {
  return (
    <main className="md:mt-12 mt-7 md:h-[120vh] h-screen">
      <section className="md:max-w-[60vw] mx-auto mb-10">
        <h1 className="font-bold md:text-5xl text-3xl text-center">
          Jadikan aktivitasmu lebih lancar dengan{" "}
          <span className="bg-gradient-primary text-transparent bg-clip-text">
            gadget
          </span>{" "}
          yang selalu siap menemani
        </h1>
        <p className="text-label text-center mt-5">
          Percayakan gadgetmu pada kami dan nikmati pengalaman teknologi yang
          mulus semulus karir Messi. Kami di sini untuk menjaga perangkat
          elektronikmu tetap berfungsi dengan sempurna. Dapatkan solusi cepat
          dan terpercaya dengan sentuhan magis dari kami.
        </p>
        <div className="flex gap-x-2 justify-center mt-5">
          <Button variant="primary" text="Let's Go" />
          <Button variant="secondary" text="Hubungi" />
        </div>
      </section>
      <section className="relative md:block hidden">
        <img
          src={Img1}
          alt="Laptop"
          width={280}
          className="rounded-xl absolute left-1/2 -translate-x-1/2"
        />
        <img
          src={Img2}
          alt="Laptop"
          width={160}
          height={160}
          className="rounded-xl absolute left-[29%] -translate-x-1/2 translate-y-[40%] h-44"
        />
        <img
          src={Img3}
          alt="Laptop"
          width={160}
          height={160}
          className="rounded-xl absolute left-[29%] -translate-x-1/2 translate-y-[250%]"
        />
        <img
          src={Img4}
          alt="Laptop"
          width={160}
          height={160}
          className="rounded-xl absolute right-[29%] translate-x-1/2 translate-y-[40%] h-44"
        />
        <img
          src={Img5}
          alt="Laptop"
          width={160}
          height={160}
          className="rounded-xl absolute right-[29%] translate-x-1/2 translate-y-[250%]"
        />
        <img
          src={Img6}
          alt="Laptop"
          width={160}
          height={160}
          className="rounded-xl absolute left-[13%] -translate-x-1/2 translate-y-[80%] h-48"
        />
        <img
          src={Img7}
          alt="Laptop"
          width={160}
          height={160}
          className="rounded-xl absolute right-[13%] translate-x-1/2 translate-y-[80%] h-48"
        />
      </section>
      <HeroImagesMobile />
    </main>
  );
}
