import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
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

const Navbar = ({ nav }) => {
  return (
    <div className="flex items-center justify-between w-full px-5 mx-auto max-w-main-width lg:px-0">
      <div>
        {nav ? (
          <Image
            src="/assets/ui/logo-black.svg"
            width={160}
            height={20}
            alt="Logo"
          />
        ) : (
          <Image src="/assets/ui/logo.svg" width={160} height={20} alt="Logo" />
        )}
      </div>
      <div className="items-center justify-between hidden space-x-10 lg:flex">
        <ul className={nav ? "flex text-black" : "flex text-white"}>
          {links.map((link) => (
            <NavigationLink text={link.text} key={link.id} />
          ))}
        </ul>
        <button className={`p-4 transition duration-300 rounded-full ring-2 ring-white ring-inset hover:bg-secondary ${nav ? 'hover:bg-secondary ring-secondary text-secondary hover:text-white' : ''}`}>

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke={ nav ? "#5135FF" : "#ffffff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>

        </button>
        <PrimaryButton text="Contact Us" />
      </div>
      <div className="flex lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M5.33301 8H26.6663" stroke={nav ? "#000" : "white"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.33301 16H18.6663" stroke={nav ? "#000" : "white"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.33301 24H23.9997" stroke={nav ? "#000" : "white"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
