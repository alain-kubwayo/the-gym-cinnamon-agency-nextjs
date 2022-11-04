import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";


const Agile = () => {
    return ( 
        <section className="relative bg-highlight-70">
            <div className="px-5 mx-auto max-w-main-width lg:px-0">
                <div className="grid grid-cols-1 py-40 space-y-10 lg:grid-cols-2 lg:space-y-0">
                    <h1 className="text-4.5xl md:text-5.5xl font-bolded text-highlight-200 leading-tight -mt-2">Agile team <br /> on demand</h1>
                    <Image width={248.5} height={161.74} src="/assets/agile/agile.png" alt="Image" className="block lg:hidden" />
                    <div className="space-y-10">
                        <p className="w-full text-base lg:w-1/2 text-highlight-150">By hiring and managing talented people with skills specific to your project, we build you a team that’s accomplished, agile and scalable in both directions.</p>
                        <PrimaryButton text="See How It Works" />
                    </div>
                </div>
            </div>
            <Image width="338" height="220" src="/assets/agile/agile.png" alt="Image" className="absolute bottom-0 right-0 hidden lg:block" />
        </section>
     );
}
 
export default Agile;