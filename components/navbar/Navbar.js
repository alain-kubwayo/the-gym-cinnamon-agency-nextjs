import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";
import NavigationLink from "./NavigationLink";

const links = [
  {
    text: "Projects",
    id: 1,
  },
  {
    text: "Services",
    id: 2,
  },
  {
    text: "About Us",
    id: 3,
  },
  {
    text: "Careers",
    id: 4,
  },
  {
    text: "Blog",
    id: 5,
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl px-3 mx-auto">
      <div>
        <Image src="/svgs/logo.svg" width={160} height={20} alt="Logo" />
      </div>
      <div className="flex items-center justify-between space-x-10">
        <ul className="flex">
          {links.map((link) => (
            <NavigationLink text={link.text} key={link.id} />
          ))}
        </ul>
        <button className="p-4 rounded-full ring-2 ring-white ring-inset bg-primary">
          <Image width={13} height={16} src="/svgs/play.svg" alt="Play" />
        </button>
        <PrimaryButton text="Contact Us" />
      </div>
    </div>
  );
};

export default Navbar;
