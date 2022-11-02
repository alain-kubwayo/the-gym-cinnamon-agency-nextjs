import ServiceCard from "../ServiceCard";
import PrimaryButton from "../button/PrimaryButton";

const cards = [
    {
        src: "/services/services-icon-1.png",
        title: "Product design",
        description: "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.",
        id: 1,
    },
    {
        src: "/services/services-icon-2.png",
        title: "Product design",
        description: "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution.",
        id: 2,
    },
    {
        src: "/services/services-icon-3.png",
        title: "Product design",
        description: "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing.",
        id: 3,
    },
    {
        src: "/services/services-icon-4.png",
        title: "Product design",
        description: "By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.",
        id: 4,
    }
]

const Services = () => {
    return ( 
        <section className="pt-48 pb-40 bg-noise-texture backdrop-brightness-[.15]">
            <div className="max-w-6xl px-6 mx-auto space-y-6 md:px-3">
                <div className="grid grid-cols-1 space-x-0 space-y-10 md:space-y-0 md:space-x-10 md:grid-cols-12">
                    <div className="text-4.5xl md:text-5.5xl text-white font-bolded col-span-5">
                        Our Services
                    </div>
                    <div className="col-span-7 space-y-20">
                        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
                            {cards.map(card => <ServiceCard key={card.id} src={card.src} title={card.title} description={card.description} />)}
                        </div>
                        <PrimaryButton text="See Our Services" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Services;