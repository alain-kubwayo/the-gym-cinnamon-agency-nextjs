import Description from "../Description";
import Title from "../heading/Title";

const Hero = () => {
    return ( 
        <section className="pt-48 pb-40 bg-noise-texture backdrop-brightness-[.15]">
            <div className="max-w-6xl px-6 mx-auto space-y-6 md:px-3">
                <Title>
                    Results focused design & <br /> development agency.
                </Title>
                <Description style="text-white leading-8">
                    Extend your team with our high performing specialists or hire us <br /> to shape your product from scratch. Either way, we’ll get your <br /> product off the ground and build a momentum for your <br /> success.
                </Description>
            </div>
        </section>
     );
}
 
export default Hero;