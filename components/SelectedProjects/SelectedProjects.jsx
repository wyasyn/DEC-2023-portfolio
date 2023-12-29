import { projectInfor } from "@/constants/data";
import { ProjectCard, TitleHead } from "..";
import "./selectedProjects.scss";
import { projectsData } from "@/constants/projectsData";

export default function SelectedProjects() {
    const selectedProjects = projectsData.slice(0, 6);
    return (
        <section className="selected-projects">
            <div className="container">
                <TitleHead {...projectInfor} />
                <div className="projects-content">
                    {selectedProjects.map((item) => {
                        return (
                            <ProjectCard
                                key={item.name}
                                link={item.link}
                                image={item.image}
                                name={item.name}
                                description={item.description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
