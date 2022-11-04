import Image from "next/image";
import Link from "next/link";

const Communication = () => {
    return ( 
        <section className="bg-white">
            <div className="px-5 py-40 mx-auto max-w-main-width lg:px-0">
                <div className="flex justify-between">
                    <div className="relative w-full space-y-10 lg:w-2/3">
                        <div className="absolute hidden h-20 rotate-180 lg:block font-bolded text-[200px] text-secondary text-opacity-10 max-w-max max-h-max top-10 -left-10">
                            ’’
                        </div>
                        <div className="absolute hidden h-20 rotate-180 md:block lg:hidden font-bolded text-9xl text-secondary text-opacity-10 max-w-max max-h-max -top-10 -left-10">
                            ’
                        </div>
                        <h1 className="text-3.5xl md:text-4.5xl font-bolded text-highlight-200">They’re consistent, and the communication is good.</h1>
                        <p className="text-base text-highlight-150 leading-6.5">When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.</p>
                        <div className="flex space-x-6">
                            <div>
                                <Image src="/communication/avatar.png" width={68} height={68} alt="Avatar" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bolded text-highlight-200">Garin Toren,</h2>
                                <h6 className="text-base text-highlight-200">CEO, ping</h6>
                            </div>
                        </div>
                    </div>
                    <div className="hidden my-auto lg:flex">
                        <Image src="/assets/communication/ping.png" width={200} height={67.94} alt="Ping" className="w-full"  />
                    </div>
                </div>
                <div className="flex flex-col pt-10 pb-2 space-y-10 md:pt-6 lg:space-y-0 lg:flex-row lg:justify-between">
                    <div className="flex space-x-14">
                        <Image src="/communication/back.png" width={48} height={27} alt="Back" className="duration-500 hover:-translate-y-[30%] cursor-pointer" />
                        <Image src="/communication/forward.png" width={48} height={27} alt="Forward" className="duration-500 hover:-translate-y-[30%] cursor-pointer" />
                    </div>
                    <div>
                        <Link href="" className="flex items-center space-x-4">
                            <Image src="/assets/ui/drop-right.svg" width={7.54} height={11.3} alt="Icon" />
                            <p className="text-base uppercase border-b text-secondary font-bolded border-secondary">View Case Study</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Communication;