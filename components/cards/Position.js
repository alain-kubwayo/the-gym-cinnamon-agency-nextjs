import Image from "next/image";

const Position = ({title}) => {
    return ( 
        <div className="flex items-center justify-between pb-6 border-b border-highlight-300">
            <h2 className="w-full text-2xl text-white lg:w-3/4 font-bolded">{title}</h2>
            <Image src="/assets/positions/arrow-right-white.png" width={48} height={27} alt="Icon" className="hover:-translate-y-[20%] duration-500 cursor-pointer" />
        </div>
    );
}
 
export default Position;