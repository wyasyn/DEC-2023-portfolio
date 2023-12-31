import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
async function createProject(data) {
    "use server";
    const formData = {
        title: data.get("title"),
        category: data.get("category"),
        link: data.get("link"),
        imageUrl: data.get("imageUrl"),
        description: data.get("decription"),
        userId: data.get("userId"),
    };
    await prisma.project.create({ data: formData });
    redirect("/products");
}

export default async function page() {
    const userIds = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return (
        <section className="add-project">
            <form action={createProject}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="category" placeholder="Category" />
                <input type="text" name="link" placeholder="Projct URL" />
                <input type="text" name="imageUrl" placeholder="Image URL" />
                <textarea
                    type="text"
                    name="description"
                    placeholder="Project Description"
                />
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
                <button type="submit">Add Project</button>
            </form>
        </section>
    );
}
