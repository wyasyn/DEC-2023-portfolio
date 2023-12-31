import { ProjectCard } from "@/components";
import prisma from "@/lib/prisma";
import "./projects-main.scss";

async function getProjects() {
    const projects = await prisma.project.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return projects;
}

export default async function page() {
    const projects = await getProjects();
    return (
        <main>
            <div className="container projects-main">
                {projects.map((item) => {
                    return (
                        <ProjectCard
                            key={item.id}
                            link={item.link}
                            image={item.imageUrl}
                            name={item.title}
                            description={item.description}
                        />
                    );
                })}
            </div>
        </main>
    );
}
