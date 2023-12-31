import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
async function createBlog(data) {
    "use server";
    const formData = {
        title: data.get("title"),
        category: data.get("category"),
        imageUrl: data.get("imageUrl"),
        content: data.get("content"),
        userId: data.get("userId"),
    };
    await prisma.blogPost.create({ data: formData });
    redirect("/blog");
}

export default async function page() {
    const userIds = await prisma.user.findMany({
        orderBy: {
            username,
        },
    });
    return (
        <section className="add-project">
            <form action={createBlog}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="category" placeholder="Category" />
                <input type="text" name="imageUrl" placeholder="Image URL" />
                <textarea type="text" name="content" placeholder="Content" />
                <select name="userId">
                    <option value="" disabled>
                        Select a userID
                    </option>
                    {userIds.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.username}
                        </option>
                    ))}
                </select>
                <button type="submit">Add Blog</button>
            </form>
        </section>
    );
}
