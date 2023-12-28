import prisma from "@/lib/prisma";

async function getProjects() {
    const projects = await prisma.project.findMany();
    return projects;
}

export default async function page() {
    const projects = await getProjects();
    return (
        <main>
            {projects.map((item) => {
                return <h2 key={item.id}>{item.title}</h2>;
            })}
        </main>
    );
}
