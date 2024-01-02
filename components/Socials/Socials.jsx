import { socialsdata } from "@/constants/data";
import "./socials.scss";
import Link from "next/link";

export default function Socials() {
    return (
        <ul className="socials">
            {socialsdata.map((item) => (
                <li key={item.name} className="social">
                    <Link href={item.url}>{item.icons}</Link>
                </li>
            ))}
        </ul>
    );
}
