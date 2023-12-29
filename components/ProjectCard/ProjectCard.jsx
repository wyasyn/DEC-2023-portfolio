import Link from "next/link";
import "./projectscard.scss";
import Image from "next/image";

export default function ProjectCard({ link, name, image, description }) {
    return (
        <Link href={link} className="project-card">
            <Image
                src={image}
                alt="project pic"
                width={1920}
                height={1280}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
            />
            <div className="info">
                <h4>{name}</h4>
                <p>Website</p>
            </div>
            <div className="view">
                <p>{description}</p>
                <button className="btn secondary">View Project</button>
            </div>
        </Link>
    );
}
