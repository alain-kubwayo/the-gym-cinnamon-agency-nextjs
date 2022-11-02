const Description = ({style, children}) => {
    return ( 
        <p className={`text-xl ${style}`}>{children}</p>
     );
}
 
export default Description;