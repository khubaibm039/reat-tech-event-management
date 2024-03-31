import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        if (password.length < 6) {
            toast("Password should be 6 or more");
            return;
        } else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
            toast("password should have at least one uppercase and one number");
            return;
        }
        createUser(email, password)
            .then((result) => {
                toast("User Create Successfully");
                navigate("/");
                console.log(result.user);
            })
            .catch((error) => {
                toast("User already created");
                console.log(error.message);
            });
    };

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register here</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className="flex items-center">
                            <p>Already have account </p>
                            <Link className="btn-link" to={"/login"}>
                                login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>{" "}
            <ToastContainer />
        </div>
    );
};

export default Register;
