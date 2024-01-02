// import prisma from "@/lib/prisma";
import { blogData } from "@/constants/blogData";
import Image from "next/image";
import "./single-blog.scss";

export default async function page({ params }) {
    const id = params.id;
    // const blogPost = await prisma.blogPost.findUnique({
    //     where: { id },
    //     include: { author: true },
    // });
    const blog = blogData.find((blog) => blog.slug === id);
    return (
        <main className="container">
            {blog ? (
                <section className="blog-item">
                    <small>{blog.date}</small>
                    <h1>{blog.title}</h1>
                    <h3>{blog.description}</h3>
                    <p>{blog.content}</p>
                    <div className="image">
                        <Image
                            src={blog.image}
                            alt="blog pic"
                            width={1920}
                            height={1280}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder="blur"
                        />
                    </div>
                </section>
            ) : (
                <p>Blog not found</p>
            )}
        </main>
    );
}
