"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function AdminLink({ name, url }) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <Link
            className={isActive ? "admin-item active" : "admin-item"}
            href={url}
            title={name}
        >
            {name}
        </Link>
    );
}
