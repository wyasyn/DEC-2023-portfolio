import prisma from "@/lib/prisma";
import "./projects-main.scss";
import { projectsData } from "@/constants/projectsData";
import Image from "next/image";
import Link from "next/link";

// async function getProjects() {
//     const projects = await prisma.project.findMany({
//         orderBy: {
//             createdAt: "desc",
//         },
//     });
//     return projects;
// }

export default function page() {
    // const projects = await getProjects();
    return (
        <>
            <div className="container projects-main">
                <div className="project-t">
                    <small>Projects</small>
                    <h1>Check My Wonderful Work</h1>
                </div>
                <div className="project-cnt">
                    {projectsData.map((item) => {
                        return (
                            <article className="main-proj" key={item.link}>
                                <div className="image">
                                    <Image
                                        src={item.image}
                                        alt="project pic"
                                        width={1920}
                                        height={1280}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        placeholder="blur"
                                    />
                                </div>
                                <div className="info">
                                    <div className="col-1">
                                        <p className="desc">
                                            {item.description}
                                        </p>
                                        <Link
                                            href={item.link}
                                            className="btn-c"
                                        >
                                            View Project
                                        </Link>
                                    </div>
                                    <h3>{item.name}</h3>
                                </div>
                                {item.category && (
                                    <p className="badge">{item.category}</p>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
