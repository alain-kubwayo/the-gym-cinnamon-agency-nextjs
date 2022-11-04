import { useState } from "react";
import Image from "next/image";
import OfficeCard from "../cards/Office";


const offices = [
    {
        imageURL: "/assets/offices/zagreb.webp",
        city: "Zagreb",
        street: "Slavonska avenija 6, 10000, Zagreb, Croatia",
        alt: "Zagreb",
        id: 1
    },
    {
        imageURL: "/assets/offices/new-york.webp",
        city: "New York",
        street: "500 7th Ave, New York, NY 10018, United States",
        alt: "New York",
        id: 2
    },
    {
        imageURL: "/assets/offices/belgrade.webp",
        city: "Belgrade",
        street: "Bulevar vojvode Mišića 37 11000, Belgrade, Serbia",
        alt: "Belgrade",
        id: 3
    }

]

const Offices = () => {
    const [scrolled, setScrolled] = useState(false);
    return ( 
        <section className="bg-white">
            <div className="px-5 pt-20 pb-0 mx-auto max-w-main-width md:pt-40 md:pb-10 lg:px-0">
                <div className="space-y-14">
                    <h1 className="text-4.5xl md:text-5.5xl font-bolded text-highlight-200">Our offices</h1>
                    <div className={`flex w-[1696px] transition-all duration-700 ${scrolled ? '-translate-x-[33.95%]':'-translate-x-0'} justify-between- md:gap-8 grid- grid-cols-3- gap-x-8 md:gap-x-20`}>
                        {offices.map(office => <OfficeCard key={office.id} {...office} />)}
                    </div>
                    <div className="hidden md:flex space-x-14">
                        <Image src="/assets/communication/back.png" width={48} height={27} alt="Back" className={`duration-500 hover:-translate-y-[30%] cursor-pointer ${scrolled ? '' : 'grayscale hover:-translate-y-0'}`} onClick={()=>setScrolled(false)} />
                        <Image src="/assets/communication/forward.png" width={48} height={27} alt="Forward" className={`duration-500 hover:-translate-y-[30%] cursor-pointer ${scrolled ? 'grayscale hover:-translate-y-0' : ''}`} onClick={()=>setScrolled(true)} />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Offices;