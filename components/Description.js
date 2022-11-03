const Description = ({style, children}) => {
    return ( 
        <p className={`text-xl text-highlight-50 ${style}`}>{children}</p>
     );
}
 
export default Description;