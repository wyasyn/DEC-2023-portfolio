import "./footer.scss";
import { Socials } from "..";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <Socials />
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
