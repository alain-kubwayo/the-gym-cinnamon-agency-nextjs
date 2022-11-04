import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

const College = () => {
    return ( 
        <section className="relative bg-white">
            <div className="px-5 mx-auto max-w-main-width lg:px-0">
                <div className="grid grid-cols-1 py-40 space-y-10 md:grid-cols-3 md:gap-x-40 md:space-y-0">
                    <Image width={300} height={197.98} src="/college-logo.png" alt="Image" className="md:col-span-1"  />
                    <div className="col-span-2 space-y-10">
                        <p className="w-full text-base md:w-1/2 text-highlight-150">Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.</p>
                        <PrimaryButton text="See How It Works" />
                    </div>
                </div>
            </div>
            <div className="absolute max-w-[556px] max-h-[402px] overflow-hidden bottom-0 right-0 hidden md:block">
            <Image width={556} height={402} src="/college.png" alt="Image" className="" />
            </div>
        </section>
     );
}
 
export default College;