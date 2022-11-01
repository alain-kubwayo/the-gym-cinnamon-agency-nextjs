import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      this.window.scrollY >= 2 ? setNav(true) : setNav(false);
    });
  }, [nav]);

  return (
    <section
      className={
        nav
          ? "bg-white fixed top-0 w-full py-4 text-black"
          : "fixed top-0 w-full py-4  bg-noise-texture backdrop-brightness-[.15]"
      }
    >
      <Navbar nav={nav} />
    </section>
  );
};

export default Navigation;
