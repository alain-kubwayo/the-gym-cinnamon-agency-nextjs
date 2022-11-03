import Image from "next/image";
import Link from "next/link";

const OfficeCard = ({imageURL, city, street, alt}) => {
    return ( 
        <div>
            <Link href="#">
                <div>
                    <Image src={imageURL} width={544} height={378} alt={alt} /> 
                </div>
                <div className="flex mt-8 space-x-5">
                    <div>
                        <Image src="/offices/location-icon.svg" width={18} height={18} alt="Map" />
                    </div>
                    <div className="">
                        <h2 className="text-2xl text-highlight-300 font-bolded">{city}</h2>
                        <p className="text-base text-highlight-150">{street}</p>
                    </div>
                </div>
            </Link>
        </div>
        
     );
}
 
export default OfficeCard;