import Link from "next/link";

const NavigationLink = ({ text }) => {
  return (
    <Link href="">
      <li className="px-4 py-3 text-base font-bolded">{text}</li>
    </Link>
  );
};

export default NavigationLink;
