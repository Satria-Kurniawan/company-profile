import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimoni from "./components/Testimoni";
import DocumentMeta from "react-document-meta";
import { LazyMotion, domAnimation } from "framer-motion";

export default function App() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const value = localStorage.getItem("theme");

    if (value === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const meta = {
    title: "APUTSTORE",
    description:
      "Tempat servis handphone, smartphone, laptop, dan perangkat elerktronik lainnya termurah, terbaik.",
    canonical: "https://edistore.vercel.app",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "servis gadget, laptop, smartphone",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <LazyMotion features={domAnimation}>
        <main className={`dark:bg-dark dark:text-light`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <section className="container mx-auto md:px-20 px-5">
            <div className="gradient-1" />
            <div className="gradient-2" />
            <Hero />
            <Services />
            <About />
            <Testimoni />
            <Contact />
          </section>
        </main>
      </LazyMotion>
    </DocumentMeta>
  );
}
