import Img1 from "../assets/images/circuit-board-glove-electric-equipment-isolated-white-background.webp";
import Img2 from "../assets/images/close-up-male-technician-holding-modern-computer-motherboard-from-table.webp";
import Img3 from "../assets/images/installing-bar-load-waiting-indicator-concept.webp";

export default function HeroImagesMobile() {
  return (
    <main className="md:hidden block">
      <section className="grid grid-cols-2 gap-3">
        <img
          src={Img1}
          alt="Laptop"
          className="rounded-xl rounded-r-none row-span-2 h-full"
        />
        <img src={Img2} alt="Laptop" className="rounded-tr-xl" />
        <img src={Img3} alt="Laptop" className="rounded-br-xl" />
      </section>
    </main>
  );
}
