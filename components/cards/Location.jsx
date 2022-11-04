const LocationCard = ({city, mainStreet, substreet, telephone}) => {
    return ( 
        <div>
            <h3 className="text-base text-highlight-70 font-bolded">{city}</h3>
            <p className="text-sm text-highlight-50">{mainStreet}</p>
            <p className="text-sm text-highlight-50">{substreet}</p>
            <p className="text-sm text-highlight-50">{telephone}</p>
        </div>
     );
}
 
export default LocationCard;