import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function page({ params }) {
    const id = params.id;
    const blogPost = await prisma.blogPost.findUnique({
        where: { id },
        include: { author: true },
    });
    return (
        <div>
            {blogPost ? (
                <>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.content}</p>
                    <Image
                        src={blogPost.imageUrl}
                        alt="blog"
                        width={400}
                        height={300}
                    />
                </>
            ) : (
                <p>no connected to database</p>
            )}
        </div>
    );
}
