import { socialsdata } from "@/constants/data";
import Link from "next/link";
import "./aboutx.scss";

export default function AboutContact() {
    return (
        <section className="about-c">
            <div className="container">
                <div className="card-c">
                    <h2>Let's Talk</h2>
                    <div className="socials">
                        {socialsdata.map((item) => (
                            <Link
                                className="social"
                                href={item.url}
                                key={item.name}
                            >
                                <div className="icon">{item.icons}</div>
                                <small>{item.name}</small>
                            </Link>
                        ))}
                    </div>
                    <Link className="btn-c" href="/contact">
                        Hire Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
