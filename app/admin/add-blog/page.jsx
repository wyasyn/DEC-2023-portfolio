// import prisma from "@/lib/prisma";
// import { redirect } from "next/navigation";
// async function createBlog(formData) {
//     "use server";
//     try {
//         const Fdata = {
//             title: formData.get("title"),
//             category: formData.get("category"),
//             imageUrl: formData.get("imageUrl"),
//             content: formData.get("content"),
//             userId: formData.get("userId"),
//         };
//         await prisma.blogPost.create({ data: Fdata });
//         redirect("/blog");
//     } catch (error) {
//         console.log(error);
//     }
// }

export default async function page() {
    // const userIds = await prisma.user.findMany({
    //     orderBy: {
    //         username,
    //     },
    // });
    return (
        <section className="add-project">
            <h2>Add Blog</h2>
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
                        name="imageUrl"
                        placeholder="Image URL"
                        required
                    />
                </div>

                <div className="form-grp">
                    <textarea
                        type="text"
                        name="content"
                        rows={10}
                        placeholder="Content"
                        required
                    />
                </div>

                <div className="form-grp">
                    <select name="userId" required>
                        <option selected disabled>
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
                    Add Blog
                </button>
            </form>
        </section>
    );
}
