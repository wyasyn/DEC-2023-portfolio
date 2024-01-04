import { linkData } from "@/constants/data";
import "./navbar.scss";
import MainNav from "./MainNav";
import { FaSun } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="main-nav">
            <nav>
                <ul>
                    {linkData.map((item) => (
                        <MainNav key={item.name} {...item} />
                    ))}
                    <li title="Theme toggle">
                        <button className="nav-link togle">
                            <div className="icon">
                                <FaSun />
                            </div>
                            <div className="name"></div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
