"use client";
import { linkData } from "@/constants/data";
import "./navbar.scss";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Socials } from "..";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                setPrevScrollY(window.scrollY);
                const currentScrollY = window.scrollY;
                setIsVisible(prevScrollY > currentScrollY);
                setPrevScrollY(currentScrollY);
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [prevScrollY]);
    const pathname = usePathname();
    return (
        <header className={isVisible ? "nav" : "nav hidden"}>
            <div className={open ? "overlay active" : "overlay"}></div>
            <nav>
                <a href="/" className="logo">
                    <span>w</span>alum.
                </a>
                <ul className={open ? "nav-list active" : "nav-list"}>
                    <li
                        className="menu"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <button>
                            <MdClose />
                        </button>
                    </li>
                    {linkData.map((item) => {
                        const isActive = pathname === item.url;
                        return (
                            <li
                                key={item.name}
                                className={
                                    isActive ? "nav-item active" : "nav-item"
                                }
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <a href={item.url}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className="btns">
                    <Socials />
                    <a href="/contact" className="btn secondary">
                        Contact Me
                    </a>
                    <button
                        className="menu"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <IoMenu />
                    </button>
                </div>
            </nav>
        </header>
    );
}
