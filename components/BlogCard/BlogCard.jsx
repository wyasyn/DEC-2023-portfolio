import Image from "next/image";
import "./blogcard.scss";
import Link from "next/link";
import { MdCalendarMonth } from "react-icons/md";

export default function BlogCard({ image, title, date, id }) {
    return (
        <article className="blog-card">
            <div className="image">
                <Image
                    src={image}
                    alt="blog pic"
                    width={1920}
                    height={1280}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                />
            </div>
            <div className="blog-info">
                <small>
                    <MdCalendarMonth /> {date}
                </small>
                <h3>{title}</h3>
                <Link href={`/blog/${id}`}>Read More</Link>
            </div>
            <div className="badge">website</div>
        </article>
    );
}
