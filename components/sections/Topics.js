import Link from "next/link";
import Image from "next/image";
import TopicCard from "../cards/Topic";

const cards = [
    {
        imageURL: "/topics/Freelance_VS.webp",
        tag: "sales",
        author: "Matija Bermanec & Lorena Ujević",
        date: "2022-10-13",
        duration: "6min",
        title: "Differences in Hiring an Agency vs. Freelancers 2.0",
        id: 1,
    },
    {
        imageURL: "/topics/Flutter_Template.webp",
        tag: "development",
        author: "Samantha Holstead",
        date: "2022-10-13",
        duration: "3min",
        title: "Cinnamon Flutter Template Overview",
        id: 2,
    },
    {
        imageURL: "/topics/Tinder_blog.webp",
        tag: "design",
        author: "Jan Marin",
        date: "2022-09-15",
        duration: "10min",
        title: "How Tinder Swindled User Experience",
        id: 3,
    } 
]

const Topics = () => {
    return ( 
        <section className="bg-white">
            <div className="max-w-6xl px-6 py-40 mx-auto md:px-3">
                <div className="space-y-16">
                    <h1 className="text-highlight-200 font-bolded text-4.5xl md:text-5.5xl">Stay in the loop <br /> on tech topics</h1>
                    <div className="flex overflow-auto md:grid md:grid-cols-3 gap-x-8 topics">
                        {
                            cards.map(card => <TopicCard {...card} key={card.id} />)
                        }
                    </div>
                    <div>
                        <Link href="" className="flex items-center space-x-4">
                            <Image src="/svgs/drop-right.svg" width={7.54} height={11.3} alt="Icon" />
                            <p className="text-base uppercase border-b text-secondary font-bolded border-secondary">View More Blogs</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Topics;