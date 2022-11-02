import Image from "next/image";

const ServiceCard = ({src, title, description}) => {
    return ( 
        <div className="space-y-6">
            <Image src={src} width={48} height={48} alt="Icon" />
            <h2 className="text-xl text-white font-bolded">{title}</h2>
            <p className="text-base text-highlight-50">{description}</p>
        </div>
     );
}
 
export default ServiceCard;