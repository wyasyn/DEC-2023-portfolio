import { projectInfor } from "@/constants/data";
import { TitleHead } from "..";
import "./selectedProjects.scss";
import { projectsData } from "@/constants/projectsData";
import Link from "next/link";
import Image from "next/image";

export default function SelectedProjects() {
    const selectedProjects = projectsData.slice(0, 6);
    return (
        <section className="selected-projects">
            <div className="container">
                <TitleHead {...projectInfor} />
            </div>
            <div className="projects-content">
                {selectedProjects.map((item) => {
                    return (
                        <Link
                            href={item.link}
                            className="project-card"
                            key={item.name}
                        >
                            <Image
                                src={item.image}
                                alt="project pic"
                                width={1920}
                                height={1280}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                placeholder="blur"
                            />
                            <div className="info">
                                <h4>{item.name}</h4>
                                <p>Website</p>
                            </div>
                            <div className="view">
                                <p>{item.description}</p>
                                <button className="btn secondary">
                                    View Project
                                </button>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
