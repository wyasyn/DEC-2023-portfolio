import { blogData } from "@/constants/blogData";
import { BlogCard, TitleHead } from "..";
import "./selctedblogs.scss";
import { BlogTitle } from "@/constants/data";

export default function SelectedBlogs() {
    const selectedBlogsData = blogData.slice(0, 3);

    return (
        <section className="home-blog">
            <div className="container">
                <TitleHead
                    title={BlogTitle.sub}
                    intro={BlogTitle.title}
                    describe={BlogTitle.description}
                />
                <div className="blog-content">
                    {selectedBlogsData.map((item) => {
                        return (
                            <BlogCard
                                key={item.date}
                                title={item.title}
                                image={item.image}
                                id={item.slug}
                                date={item.date}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
