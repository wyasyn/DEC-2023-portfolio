import { socialsdata } from "@/constants/data";
import "./footer.scss";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="socials">
                    {socialsdata.map((item) => {
                        return (
                            <Link
                                href={item.url}
                                className="social"
                                key={item.name}
                            >
                                {item.icons}
                            </Link>
                        );
                    })}
                </div>
                <small>
                    &copy; {currentYear} <strong>Yasin Walum.</strong> All
                    Rights Reserved
                </small>
                <small>
                    Developed by <strong>Yasin Walum</strong>
                </small>
            </div>
        </footer>
    );
}
