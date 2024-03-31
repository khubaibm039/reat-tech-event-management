import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className=" bg-cover relative bg-bannerImg bg-no-repeat ">
            <div className="static">
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;
