import { Link } from "react-router-dom";

const HeaderImg = () => {
    return (
        <div className="bottom-0 z-20 absolute bg-cover w-full">
            <div className=" flex lg:justify-between  items-center  w-full h-full ">
                <div className="w-[50%] md:justify-start lg:justify-center flex ml-0">
                    <div className="text-white w-1/2 ">
                        <p className="text-xl">
                            17-19 <br /> July 2023
                        </p>
                        <h2 className="text-5xl font-extrabold py-4">
                            DEVELOPER CONFERENCE
                        </h2>
                        <p className="bg-white mb-8 p-1 text-black ">
                            November 10-12, Boston, Canada
                        </p>
                        <Link className=" underline underline-offset-8">
                            Buy Ticket
                        </Link>
                    </div>
                </div>
                <div className="w-2/5">
                    <img
                        className="w-full"
                        src="https://thepixelcurve.com/html/exvent/dest/assets/images/hero_img1.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderImg;
