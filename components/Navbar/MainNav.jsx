"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav({ name, icon, url }) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <li title={name}>
            <Link
                className={isActive ? "nav-link active" : "nav-link"}
                href={url}
            >
                <div className="icon">{icon}</div>
                <div className="name"></div>
            </Link>
        </li>
    );
}
