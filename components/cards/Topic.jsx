import Image from "next/image";

const TopicCard = ({imageURL, tag, author, date, duration, title}) => {
    const newAuthor =  author.length >= 19 ? author.slice(0, 19) + "..." : author;
    return ( 
        <div className="space-y-4">
            <div>
               <Image src={imageURL} width={352} height={215.95} alt="Image" className="" />
            </div>
            <p className="text-xs uppercase text-highlight-200 font-bolded">{tag}</p>
            <div className="flex items-center space-x-2 text-base text-highlight-150">
                <p>{newAuthor}</p>
                <div className="w-1.5 h-1.5 rounded-full bg-separator"></div>
                <p>{date}</p>
                <div className="w-1.5 h-1.5 rounded-full bg-separator"></div>
                <p>{duration}</p>
            </div>
            <h2 className="text-2xl text-highlight-200 font-bolded">{title}</h2>
        </div>
     );
}
 
export default TopicCard;