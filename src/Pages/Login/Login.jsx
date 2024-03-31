import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { logInUser } = useContext(AuthContext);
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
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        ) {
            toast("please provide an email");
        }
        logInUser(email, password)
            .then((result) => {
                toast("login Successful");
                navigate("/");
                console.log(result.user);
            })
            .catch((error) => {
                toast("User already logged in");
                console.log(error.message);
            });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
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
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className="flex items-center">
                            <p>Don't have an account </p>
                            <Link className="btn-link" to={"/register"}>
                                {" "}
                                register
                            </Link>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;
