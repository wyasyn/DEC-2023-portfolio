import "./login.scss";
import { FaLock, FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

export default function page() {
    return (
        <div className="login">
            <div className="cnt">
                <h3>LogIn</h3>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="username">
                            <FaUser />
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            autoComplete="false"
                            placeholder="Your username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <FaLock />
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Your password"
                            autoComplete="false"
                        />
                    </div>
                    <button type="submit">
                        <MdLogin />
                        LogIn
                    </button>
                </form>
            </div>
        </div>
    );
}
