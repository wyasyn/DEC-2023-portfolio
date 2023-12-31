import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
async function createBlog(formData) {
    "use server";
    try {
        const Fdata = {
            title: formData.get("title"),
            category: formData.get("category"),
            imageUrl: formData.get("imageUrl"),
            content: formData.get("content"),
            userId: formData.get("userId"),
        };
        await prisma.blogPost.create({ data: Fdata });
        toast.success("Blog added successfully");
        redirect("/blog");
    } catch (error) {
        toast.error("Failed to add blog");
    }
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
