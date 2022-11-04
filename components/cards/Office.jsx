import Image from "next/image";
import Link from "next/link";

const Office = ({imageURL, city, street, alt}) => {
    return ( 
        <div className="w-[256.5px] md:w-[544px]">
            <Link href="#">
                <div>
                    <Image src={imageURL} width={544} height={378} alt={alt} className="hidden md:block" /> 
                    <Image src={imageURL} width={256.5} height={178.23} alt={alt} className="block md:hidden" /> 
                </div>
                <div className="flex mt-8 space-x-2 md:space-x-5">
                    <div className="w-1/6 md:w-auto">
                        <Image src="/assets/offices/location-icon.svg" width={18} height={18} alt="Map" />
                    </div>
                    <div>
                        <h2 className="text-2xl text-highlight-300 font-bolded">{city}</h2>
                        <p className="text-base text-highlight-150">{street}</p>
                    </div>
                </div>
            </Link>
        </div>
        
     );
}
 
export default Office;