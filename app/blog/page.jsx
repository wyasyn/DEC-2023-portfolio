import { blogData } from "@/constants/blogData";
import "./blog.scss";
import Image from "next/image";
import { BlogCard } from "@/components";
import Link from "next/link";

export default function page() {
    const blog = blogData[0];
    const blogs = blogData.slice(1, -1);
    return (
        <main className="container">
            <div className="blog-content-main">
                <div className="featured-blog">
                    <Image
                        src={blog.image}
                        alt="project pic"
                        width={1920}
                        height={1280}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                    />
                    <div className="info">
                        <small>{blog.date}</small>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <Link className="btn-c" href={`/blog/${blog.slug}`}>
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="main-blogs">
                    <h2>Recent Blogs</h2>
                    <div className="recent-blogs">
                        {blogs.map((item) => (
                            <BlogCard
                                key={item.slug}
                                image={item.image}
                                title={item.title}
                                date={item.date}
                                id={item.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
