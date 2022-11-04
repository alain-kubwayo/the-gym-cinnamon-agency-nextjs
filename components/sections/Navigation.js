import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      this.window.scrollY >= 2 ? setNav(true) : setNav(false);
    });
  }, [nav]);

  return (
    <section
      className={`fixed z-10 top-0 w-full py-4 ${nav ? "bg-white text-black" : "bg-transparent text-white"}
          `
      }
    >
      <Navbar nav={nav} />
    </section>
  );
};

export default Navigation;
