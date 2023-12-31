import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import "./signin.scss";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

async function SignIn(data) {
    "use server";
    const username = data.get("username");
    const password = data.get("password");

    // Call your authentication function here
    const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
    });

    if (!result.error) {
        // Handle successful sign-in
        toast.success("Signed in successfully!");
        redirect("/admin");
    } else {
        // Handle sign-in error
        toast.error("Sign-in failed");
    }
}

const SignInForm = () => {
    return (
        <section className="sign-in-sec container">
            <form className="sign-in-form" action={SignIn}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <FaUser />
                    <input
                        type="text"
                        name="username"
                        placeholder="Your Username"
                    />
                </div>
                <div className="form-group">
                    <MdLock />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </section>
    );
};

export default SignInForm;
