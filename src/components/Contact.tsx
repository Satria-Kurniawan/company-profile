import SectionHeader from "./SectionHeader";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

type Contact = {
  icon: JSX.Element;
  name: string;
  link: string;
  color: string;
};

export default function Contact() {
  const contacts: Contact[] = [
    {
      icon: <BsWhatsapp size={40} />,
      name: "Whatsapp",
      link: "https://wa.me/6289671577111",
      color: "#8CFFA9",
    },
    {
      icon: <BsInstagram size={40} />,
      name: "Instagram",
      link: "https://www.instagram.com/ediaput411/?hl=id",
      color: "#FFAC99",
    },
    {
      icon: <BsFacebook size={40} />,
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100006477878373&mibextid=ZbWKwL",
      color: "#ABDFFF",
    },
    {
      icon: <MdEmail size={40} />,
      name: "Email",
      link: "mailto:edi.narendra@undiksha.ac.id",
      color: "#C1BCFF",
    },
  ];
  return (
    <main
      id="kontak"
      className="mt-12 h-screen bg-white dark:bg-dark2 rounded-t-[3rem] md:p-10 p-3"
    >
      <SectionHeader
        title="Kontak"
        subtext="Hubungi melalui sosial media dibawah."
      />
      <section className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-16">
        {contacts.map((contact, i) => (
          <div
            key={i}
            style={{ backgroundColor: contact.color }}
            className="h-[10rem] rounded-2xl flex justify-center items-center hover:brightness-75 duration-300 cursor-pointer"
          >
            <a href={contact.link} target="_blank">
              <div>
                <div className="w-fit mx-auto mb-3">{contact.icon}</div>
                <h1 className="text-center font-semibold">{contact.name}</h1>
              </div>
            </a>
          </div>
        ))}
      </section>
      <div className="md:mt-72 mt-32 w-fit mx-auto">&#169;jsatriakurniawan</div>
    </main>
  );
}
