import Image from "next/image";
import OfficeCard from "../cards/Office";


const offices = [
    {
        imageURL: "/offices/zagreb.webp",
        city: "Zagreb",
        street: "Slavonska avenija 6, 10000, Zagreb, Croatia",
        alt: "Zagreb",
        id: 1
    },
    {
        imageURL: "/offices/new-york.webp",
        city: "New York",
        street: "500 7th Ave, New York, NY 10018, United States",
        alt: "New York",
        id: 2
    },
    {
        imageURL: "/offices/belgrade.webp",
        city: "Belgrade",
        street: "Bulevar vojvode Mišića 37 11000, Belgrade, Serbia",
        alt: "Belgrade",
        id: 3
    }

]

const Offices = () => {
    return ( 
        <section className="bg-white">
            <div className="max-w-6xl px-6 pt-20 pb-0 mx-auto md:pt-40 md:pb-10 md:px-3">
                <div className="space-y-14">
                    <h1 className="text-4.5xl md:text-5.5xl font-bolded text-highlight-200">Our offices</h1>
                    <div className="grid grid-cols-2">
                        {offices.map(office => <OfficeCard key={office.id} {...office} />)}
                    </div>
                    <div className="flex space-x-14">
                        <Image src="/communication/back.png" width={48} height={27} alt="Back" className="duration-500 hover:-translate-y-[30%] cursor-pointer" />
                        <Image src="/communication/forward.png" width={48} height={27} alt="Forward" className="duration-500 hover:-translate-y-[30%] cursor-pointer" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Offices;