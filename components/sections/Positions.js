import PositionCard from "../PositionCard";
import PrimaryButton from "../button/PrimaryButton";

const cards = [
    {
        title: "Android Developer",
        id: 1,
    },
    {
        title: "Android Developer",
        id: 2,
    },
    {
        title: "Backend Development Team Lead",
        id: 3,
    },
]

const Positions = () => {
    return ( 
        <section className="py-24 md:pt-48 md:pb-40 bg-noise-texture backdrop-brightness-[.15]">
            <div className="max-w-6xl px-6 mx-auto space-y-6 md:px-3">
                <div className="flex flex-col space-x-0 space-y-28 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-10">
                    <div className="space-y-6">
                        <h1 className="text-4.5xl md:text-5.5xl text-white font-bolded">
                            We're Growing
                        </h1>
                        <p className="w-full md:w-2/3 text-highlight-50">Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies! Make the world a better, more connected place.</p>
                        <PrimaryButton text="See All Positions" />
                    </div>
                    <div className="w-full space-y-20">
                        <div className="flex flex-col justify-between space-y-10">
                            {cards.map(card => <PositionCard key={card.id} src={card.src} title={card.title} />)}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Positions;