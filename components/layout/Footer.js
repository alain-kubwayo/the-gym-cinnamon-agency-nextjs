import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import Location from "../cards/Location";


const locations = [
    {
        city: "Zagreb",
        mainStreet: "Slavonska avenija 6,",
        substreet: "10000, Zagreb, Croatia",
        telephone: "+385 99 347 3103",
        id: 1,
    },
    {
        city: "New York",
        mainStreet: "500 7th Ave, New York,",
        substreet: "NY 10018, United States",
        telephone: "",
        id: 2,
    },
    {
        city: "Belgrade",
        mainStreet: "Bulevar vojvode Mišića 37",
        substreet: "11000, Belgrade, Serbia",
        telephone: "",
        id: 3,
    }
];

const links = ["Home", "Projects", "Services", "About Us", "Careers", "Blog"];

const socialIconPaths = ["/assets/footer/socials/linkedin.svg", "/assets/footer/socials/dribble.svg", "/assets/footer/socials/behance.svg", "/assets/footer/socials/instagram.svg", "/assets/footer/socials/facebook.svg", "/assets/footer/socials/rss.svg"];


const Footer = () => {
    return ( 
        <section className="pt-24 lg:pt-48 bg-noise-texture backdrop-brightness-[.11]">
            <div className="px-5 mx-auto space-y-6 max-w-main-width lg:px-0">
                <div className="flex flex-col md:flex-row md:justify-between md:space-x-16 lg:space-x-52">
                    <div className="flex flex-col justify-between">
                        <div>
                            <Link href="/">
                                <Image src="/assets/ui/logo.svg" width={160} height={20} alt="Logo" />
                            </Link>
                            <h2 className="block pt-10 text-2xl text-highlight-70 font-bolded md:hidden">All software,<br /> zero bullshit.</h2>
                            <ul className="hidden py-8 space-y-3 text-base md:block text-highlight-50">
                                {links.map((link,i) => <li key={i}>{link}</li> )}
                            </ul>
                            <div className="grid w-full grid-cols-2 py-8 text-base md:hidden text-highlight-50">
                                <div className="space-y-4">
                                    <div><Link href="/">Home</Link></div>
                                    <div><Link href="/projects">Projects</Link></div>
                                    <div><Link href="/services">Services</Link></div>
                                </div>
                                <div className="space-y-4">
                                    <div><Link href="/">About Us</Link></div>
                                    <div><Link href="/careers">Careers</Link></div>
                                    <div><Link href="/blog">Blog</Link></div>
                                </div>
                            </div>
                        </div>
                        <p className="hidden text-sm underline md:block text-highlight-70">hello@cinnamon.agency</p>
                    </div>
                    <div className="w-full space-y-20">
                        <h2 className="text-highlight-70 text-3.5xl font-bolded hidden md:block">All software, zero bullshit.</h2>
                        <div>
                            <div className="grid grid-cols-2 gap-6 md:justify-between md:flex md:mb-16">
                                {locations.map(location => <Location key={location.id} {...location} />)}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-full space-y-6 md:space-y-0 md:flex-row"> 
                            <div className="flex flex-col justify-between w-full pb-10 space-y-6 md:w-[275px] md:pb-0">
                                <h6 className="text-base font-bolded text-highlight-70">Our newsletter</h6>
                                <div class="relative z-0">
                                    <input type="text" id="small_standard" class="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border- peer" placeholder=" " />
                                    <label for="small_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                                </div>
                                <PrimaryButton text="Subscribe" />
                            </div>
                            <div className="flex flex-col space-y-10">
                                <Image src="/assets/footer/pangea.svg" width={200} height={56} alt="Image" className="self-center" />
                                <Image src="/footer/clutch-badge.webp" width={216} height={65} alt="Image" className="self-center md:self-start" />
                            </div>
                            <p className="block pt-10 text-sm text-center underline md:hidden text-highlight-70">hello@cinnamon.agency</p>
                        </div>
                    </div>
                </div>
                <div className="justify-between hidden border-t md:flex border-highlight-300 py-9">
                    <div className="flex space-x-5 text-base text-highlight-50">
                        <span>&copy; 2022 Cinnamon</span>
                        <span className="underline">Privacy Policy</span>
                    </div>
                    <ul className="flex space-x-5">
                        {socialIconPaths.map((path, i) => (
                            <Link href="#" key={i}>
                                <Image src={path} width={21} height={21} alt="Social" />
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col md:hidden">
                    <ul className="flex justify-center py-6 space-x-5 border-y border-highlight-300">
                        {socialIconPaths.map((path, i) => (
                            <Link href="#" key={i}>
                                <Image src={path} width={21} height={21} alt="Social" />
                            </Link>
                        ))}
                    </ul>
                    <div className="flex justify-center py-6 space-x-5 text-base text-highlight-50">
                        <span>&copy; 2022 Cinnamon</span>
                        <span className="underline">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;