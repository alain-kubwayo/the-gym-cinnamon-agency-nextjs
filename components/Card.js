import Image from "next/image";

const Card = ({background, src, tags, title, description}) => {
    return ( 
        <div className="space-y-8">
            <div className={`${background} flex items-center justify-center py-10`}>
                <Image src={src} width={935} height={433} alt="Card Image" className="transition duration-700 hover:scale-110" />
            </div>
            <ul className="flex space-x-4 text-xs uppercase font-bolded text-highlight-100">
                {
                    tags.map((tag,i) => (
                        <li key={i}>{tag}</li>
                    ))
                }
            </ul>
            <h2 className="font-bolded text-3.5xl md:text-4.5xl text-highlight-200">{title}</h2>
            <p className="mx-auto text-xl md:mx-0 md:w-7/12">{description}</p>
        </div>
     );
}
 
export default Card;