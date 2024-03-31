import BgIcons from "../Components/Header/BgIcons";
import GradientBg from "../Components/Header/GradientBg";
import HeaderImg from "../Components/Header/HeaderImg";

const Home = () => {
    return (
        <div className="">
            {" "}
            <div>
                <GradientBg></GradientBg>
            </div>
            <div>
                <BgIcons></BgIcons>
            </div>
            <div>
                <HeaderImg></HeaderImg>
            </div>
            {/* <div>
        <Countdowns></Countdowns>
    </div> */}
            <div className="hero min-h-screen  my-32">
                <div className="hero-content flex md:flex-row flex-col-reverse ">
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center gap-4 md:relative md:z-0 md:-right-10">
                        <img
                            src="https://thepixelcurve.com/html/exvent/dest/assets/images/about_img1.jpg"
                            className="w-full rounded-lg shadow-2xl "
                        />
                        <img
                            src="https://thepixelcurve.com/html/exvent/dest/assets/images/about_img2.jpg"
                            className="w-1/2 rounded-lg shadow-2xl "
                        />
                    </div>
                    <div className="md:w-1/2 w-full z-10 lg:relative  lg:-left-10 p-[6px] flex flex-col items-left bg-[#f9d464]">
                        <div className="p-16 bg-white ">
                            <h6 className="text-[#fc097c] my-2 flex justify-center bg-pink-300 w-32">
                                An Event For
                            </h6>
                            <h1 className="text-3xl font-bold">
                                Get curious. Be inspired. Create your future.
                            </h1>
                            <p className="py-6 text-xs">
                                We’re inviting the top creatives in the tech
                                industry from all over the world to come learn,
                                grow, scrape their knees, try new things, to be
                                vulnerable, and to have epic adventures
                                <br /> <br />
                                Grow, scrape their knees, try new things, to be
                                vulnerable, and to have epic adventures
                                together, this time both
                            </p>
                            <button className="btn btn-primary w-52">
                                Contact for booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us */}
        </div>
    );
};

export default Home;
