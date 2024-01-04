import { blogData } from "@/constants/blogData";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="admin-projects">
            <div className="admin-title">
                <h2>Blog</h2>
                <Link href="/admin/add-blog">Add Blog</Link>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogData.map((item) => (
                            <tr key={item.slug}>
                                <td>
                                    <div className="image">
                                        <Image
                                            src={item.image}
                                            alt="project pic"
                                            width={80}
                                            height={120}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            placeholder="blur"
                                        />
                                    </div>
                                </td>
                                <td>{item.title}</td>
                                <td className="btns">
                                    <button className="btn-c">Update</button>
                                    <button className="btn-c danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
