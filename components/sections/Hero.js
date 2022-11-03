import Description from "../Description";
import Title from "../heading/Title";

const Hero = () => {
    return ( 
        <section className="pt-48 pb-40 bg-noise-texture backdrop-brightness-[.11]">
            <div className="px-5 mx-auto space-y-6 max-w-main-width md:px-0">
                <div className="space-y-4">
                    <Title>
                        Results focused design & <br /> development agency.
                    </Title>
                    <Description style="text-white leading-8">
                        Extend your team with our high performing specialists or hire us <br className="hidden md:block" /> to shape your product from scratch. Either way, we’ll get your <br className="hidden md:block" /> product off the ground and build a momentum for your <br className="hidden md:block" /> success.
                    </Description>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;