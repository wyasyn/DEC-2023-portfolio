import { ServicesData, socialsdata } from "@/constants/data";
import "./Hero.scss";
import Image from "next/image";
import { images } from "@/constants/images";
import { Service } from "..";

export default function Hero() {
    const selectedServ = ServicesData.slice(0, 3);
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <small>Hi, am</small>
                        <h1>
                            Yasin <span>Walum</span>
                        </h1>
                        <h2>web developer</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laudantium, soluta!
                        </p>
                        <div className="btns">
                            <a
                                href="/assets/resume.pdf"
                                download
                                className="btn primary"
                            >
                                Download CV
                            </a>
                            <a href="/contact" className="btn secondary">
                                Hire Me
                            </a>
                        </div>
                        <ul className="socials">
                            {socialsdata.map((item) => (
                                <li key={item.name} className="social">
                                    <a href={`${item.url}`}>{item.icons}</a>{" "}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-2">
                        <div className="image">
                            <Image
                                src={images.profile}
                                alt="profile"
                                width={450}
                                height={627}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                    <div className="services">
                        {selectedServ.map((item) => {
                            return <Service key={item.title} {...item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
