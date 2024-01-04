// import prisma from "@/lib/prisma";
// import { redirect } from "next/navigation";
// async function createProject(data) {
//     "use server";
//     try {
//         const formData = {
//             title: data.get("title"),
//             category: data.get("category"),
//             link: data.get("link"),
//             imageUrl: data.get("imageUrl"),
//             description: data.get("decription"),
//             userId: data.get("userId"),
//         };
//         await prisma.project.create({ data: formData });
//         redirect("/products");
//     } catch (error) {
//         console.log(error);
//     }
// }

export default async function page() {
    // const userIds = await prisma.user.findMany({
    //     orderBy: {
    //         createdAt: "desc",
    //     },
    // });
    return (
        <section className="add-project">
            <h2>Add Project</h2>
            <form className="form">
                <div className="form-grp">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        required
                    />
                </div>

                <div className="form-grp">
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        required
                    />
                </div>

                <div className="form-grp">
                    <input
                        type="url"
                        name="link"
                        placeholder="Projct URL"
                        required
                    />
                </div>

                <div className="form-grp">
                    <input
                        type="url"
                        name="imageUrl"
                        placeholder="Image URL"
                        required
                    />
                </div>

                <div className="form-grp">
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Project Description"
                        rows={10}
                    />
                </div>

                <div className="form-grp">
                    <select name="userId">
                        <option selected value="" disabled>
                            Select a userID
                        </option>
                        {/* {userIds.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.username}
                        </option>
                    ))} */}
                    </select>
                </div>

                <button className="btn-c" type="submit">
                    Add Project
                </button>
            </form>
        </section>
    );
}
