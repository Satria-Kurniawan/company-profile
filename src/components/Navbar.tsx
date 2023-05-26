import * as React from "react";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

type Menu = {
  name: string;
  link: string;
};

type NavbarProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const menus: Menu[] = [
    { name: "Layanan", link: "layanan" },
    { name: "Tentang", link: "about" },
    { name: "Testimoni", link: "testimoni" },
    { name: "Kontak", link: "kontak" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("");

  const toggleTheme = (value: string) => {
    setTheme(value);
    localStorage.setItem("theme", value);
    const darkMode = value === "dark" && true;
    document.documentElement.classList.toggle("dark", darkMode);
  };

  const brand = "APUTSTORE";

  const brandContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const brandItem = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className={`sticky top-0 backdrop-blur-md py-3 z-50 ${
        mobileMenuOpen && "md:h-fit h-screen"
      }`}
    >
      <section className="container mx-auto md:px-20 px-5 flex justify-between items-center">
        <motion.div
          variants={brandContainer}
          initial="hidden"
          animate="visible"
        >
          <h1 className="brand-font bg-gradient-primary text-transparent bg-clip-text font-extrabold text-3xl">
            {brand.split("").map((char) => (
              <motion.span variants={brandItem}>{char}</motion.span>
            ))}
          </h1>
        </motion.div>
        <ul className="md:flex hidden gap-x-3 items-center">
          {menus.map((menu, i) => (
            <li key={i}>
              <Link
                to={menu.link}
                smooth={true}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveMenu(menu.name)}
              >
                <div
                  className={`relative cursor-pointer py-2 px-3 font-medium hover:bg-gray-50 dark:hover:text-primary ${
                    activeMenu === menu.name &&
                    "bg-gradient-primary bg-clip-text text-transparent"
                  }`}
                >
                  {menu.name}
                </div>
              </Link>
            </li>
          ))}
          <li className="border py-2 px-1 rounded-full">
            <span
              className={`py-2 px-4 rounded-full font-semibold cursor-pointer ${
                theme === "dark" &&
                "bg-primary dark:bg-white text-white dark:text-primary"
              }`}
              onClick={() => toggleTheme("dark")}
            >
              Dark
            </span>
            <span
              className={`py-2 px-4 rounded-full font-semibold cursor-pointer ${
                theme === "light" &&
                "bg-primary dark:bg-white text-white dark:text-primary"
              }`}
              onClick={() => toggleTheme("light")}
            >
              Light
            </span>
          </li>
        </ul>
        <div className="md:hidden block">
          <HamburgerMenu
            open={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((currentState) => !currentState)}
          />
          <div
            className={`fixed top-20 left-0 right-0 h-[80vh] rounded-2xl dark:text-light p-5 mx-5 flex justify-center items-center duration-300 ${
              mobileMenuOpen ? "scale-100" : "scale-0"
            }`}
          >
            <ul className="flex flex-col gap-y-10 w-fit mx-auto">
              {menus.map((menu, i) => (
                <li key={i}>
                  <Link
                    to={menu.link}
                    smooth={true}
                    spy={true}
                    offset={-80}
                    onSetActive={() => setActiveMenu(menu.name)}
                  >
                    <div
                      className={`text-center font-semibold cursor-pointer ${
                        activeMenu === menu.name &&
                        "bg-gradient-primary bg-clip-text text-transparent"
                      }`}
                    >
                      {menu.name}
                    </div>
                  </Link>
                </li>
              ))}
              <li className="border py-2 px-1 rounded-full">
                <span
                  className={`py-2 px-4 rounded-full font-semibold cursor-pointer ${
                    theme === "dark" && "bg-gradient-primary text-white"
                  }`}
                  onClick={() => toggleTheme("dark")}
                >
                  Dark
                </span>
                <span
                  className={`py-2 px-4 rounded-full font-semibold cursor-pointer ${
                    theme === "light" && "bg-gradient-primary text-white"
                  }`}
                  onClick={() => toggleTheme("light")}
                >
                  Light
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
}
