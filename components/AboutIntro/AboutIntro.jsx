import Image from "next/image";
import "./aboutinto.scss";
import { images } from "@/constants/images";
import { TitleHead } from "..";
import { aboutInfor } from "@/constants/data";
import { FaCodepen, FaInstagram, FaPinterestP } from "react-icons/fa";
import Link from "next/link";

export default function AboutIntro() {
    return (
        <section className="about-intro">
            <div className="container row">
                <div className="col-1">
                    <div className="image">
                        <Image
                            src={images.profile2}
                            alt="profile"
                            width={450}
                            height={627}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className="col-2">
                    <TitleHead {...aboutInfor} />
                    <div className="socials">
                        <h3>You can follow me also here:</h3>
                        <div className="socials-cards"
                        >
                            <Link
                                href="https://codepen.io/wyasyn/"
                                className="social"
                            >
                                <div className="icon">
                                    <FaCodepen />
                                </div>
                                <small className="name">CodePen</small>
                            </Link>
                            <Link
                                href="https://www.pinterest.com/"
                                className="social"
                            >
                                <div className="icon">
                                    <FaPinterestP />
                                </div>
                                <small className="name">Pinterest</small>
                            </Link>
                            <Link
                                href="https://www.instagram.com/wyasyn"
                                className="social"
                            >
                                <div className="icon">
                                    <FaInstagram />
                                </div>
                                <small className="name">Insta</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
