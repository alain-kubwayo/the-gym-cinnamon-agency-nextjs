import Image from "next/image";

import PrimaryButton from "../buttons/PrimaryButton";

const departments = [
    'Product design',
    'Web development',
    'Mobile development',
    'Quality assurance',
    'Marketing',
    'Project management',
    'Human resources',
    'Sales',
    'Fluffy friends',
]

const Departments = () => {
    return ( 
        <section className="relative bg-highlight-70">
        <div className="px-5 py-24 mx-auto max-w-main-width lg:py-245px lg:px-0">
            <div className="space-y-8 lg:space-y-16">
                <h1 className="text-4.5xl lg:text-5.5xl font-bolded text-highlight-200 leading-tight -mt-2 w-full md:w-2/3">Who we are</h1>
                <p className="max-w-448 text-base text-highlight-150 leading-6.5">Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.</p>
                <Image width={280} height={444.06} src="/departments-img.png" alt="Image" className="block lg:hidden" />
                <ul className="hidden w-2/3 grid-cols-2 lg:grid gap-y-8 ">
                    {departments.map((department,i) => <li key={i} className="text-xl font-bolded text-highlight-200">{department}</li>)}
                </ul>
                <PrimaryButton text="Read About Us" />
            </div>
        </div>
        <Image width={512} height={812} src="/departments-img.png" alt="Image" className="absolute right-0 hidden top-[15%] bottom-[15%] lg:block" />
    </section>
     );
}
 
export default Departments;