import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

const CallToAction = () => {
    return ( 
        <section className="relative bg-highlight-70">
            <div className="px-5 py-20 mx-auto text-center max-w-main-width md:py-40 md:px-0">
                <div className="text-highlight-200 font-bolded text-4.5xl md:text-5.5xl leading-11 md:leading-18">
                    <h1 className="hidden md:block">Have a project in mind?</h1>
                    <h1>Let&apos;s work together.</h1>
                </div>
                <div className="pt-10 md:pt-20">
                    <PrimaryButton text="Contact us" />
                </div>
            </div>
            <Image src="/cta.png" width={"400"} height={"400"} alt="Image" className="absolute bottom-0 left-0 hidden md:block" />
            <Image src="/cta.png" width={"100"} height={"100"} alt="Image" className="absolute bottom-0 left-0 block md:hidden" />
        </section>
     );
}
 
export default CallToAction;