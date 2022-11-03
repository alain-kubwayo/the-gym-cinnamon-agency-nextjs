import Card from "../Card";

const cards = [
    {
        background: "bg-cards-100",
        src: "/devices.png",
        tags: ["Product Design", "Quality Assurance"],
        title: <>Corrily: Optimize prices <br /> to maximize revenue</>,
        description: "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.",
        id: 1
    },
    {
        background: "bg-cards-200",
        src: "/devices-2.png",
        tags: ["Product Design", "Web Development"],
        title: <>Fiona: Engage & <br /> Decide</>,
        description: "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.",
        id: 2
    },
    {
        background: "bg-cards-300",
        src: "/devices-3.png",
        tags: ["Product Design", "Web Development", "Quality Assurance"],
        title: <>Ukulele: <br />The largest ukulele tabs archive</>,
        description: "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.",
        id: 3
    }
]

const HomeCards = () => {
    return (  
        <section className="py-32">
            <div className="max-w-6xl px-6 mx-auto space-y-20 md:space-y-40 md:px-3">
                {
                    cards.map(card => (
                        <Card {...card} key={card.id } />
                    ))
                }
               
            </div>
        </section>
        
    );
}
 
export default HomeCards;