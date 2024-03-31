import Countdown from "react-countdown";
const Countdowns = () => {
    return (
        <div className=" z-20 absolute bg-cover w-full border right-0 bottom-0 ">
            <div className="w-full text-black font-bold text-7xl">
                <Countdown date={Date.now() + 5000 * 60 * 60}></Countdown>
            </div>
        </div>
    );
};

export default Countdowns;
