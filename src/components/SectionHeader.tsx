import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  subtext: string;
};

const titleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleItem = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function SectionHeader({ title, subtext }: SectionHeaderProps) {
  return (
    <header className="max-w-[20rem] mx-auto">
      <motion.h1
        variants={titleContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-2xl font-bold"
      >
        {title.split("").map((char) => (
          <motion.span variants={titleItem} key={char}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <p className="text-center">{subtext}</p>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 70 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-primary rounded-full mt-3 mx-auto"
      />
    </header>
  );
}
