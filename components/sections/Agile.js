import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

const Agile = () => {
    return ( 
        <section className="relative bg-highlight-70">
            <div className="px-5 mx-auto max-w-main-width md:px-0">
                <div className="grid grid-cols-1 py-40 space-y-10 md:grid-cols-2 md:space-y-0">
                    <h1 className="text-4.5xl md:text-5.5xl font-bolded text-highlight-200 leading-tight -mt-2">Agile team <br /> on demand</h1>
                    <Image width={248.5} height={161.74} src="/agile.png" alt="Image" className="block md:hidden" />
                    <div className="space-y-10">
                        <p className="w-full text-base md:w-1/2 text-highlight-150">By hiring and managing talented people with skills specific to your project, we build you a team that’s accomplished, agile and scalable in both directions.</p>
                        <PrimaryButton text="See How It Works" />
                    </div>
                </div>
            </div>
            <Image width="338" height="220" src="/agile.png" alt="Image" className="absolute bottom-0 right-0 hidden md:block" />
        </section>
     );
}
 
export default Agile;