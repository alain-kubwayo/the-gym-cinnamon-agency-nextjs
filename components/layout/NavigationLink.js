import Link from "next/link";

const NavigationLink = ({ text }) => {
  return (
    <Link href="">
      <li className="px-4 py-3 text-base transition duration-300 font-bolded hover:text-secondary">{text}</li>
    </Link>
  );
};

export default NavigationLink;
