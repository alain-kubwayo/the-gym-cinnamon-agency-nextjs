import PositionCard from "../cards/Position";
import PrimaryButton from "../buttons/PrimaryButton";

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
        <section className="py-24 lg:pt-48 lg:pb-40 bg-noise-texture backdrop-brightness-[.11]">
            <div className="px-5 mx-auto space-y-6 max-w-main-width lg:px-0">
                <div className="flex flex-col space-x-0 space-y-20 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-10">
                    <div className="space-y-6">
                        <h1 className="text-4.5xl lg:text-5.5xl text-white font-bolded">
                            We&apos;re Growing
                        </h1>
                        <p className="w-full lg:w-2/3 text-highlight-50 leading-6.5">Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies! Make the world a better, more connected place.</p>
                        <PrimaryButton text="See All Positions" />
                    </div>
                    <div className="w-full space-y-4 lg:space-y-20">
                        <div className="flex flex-col justify-between space-y-10">
                            {cards.map(card => <PositionCard key={card.id} {...card} />)}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Positions;