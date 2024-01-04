import {
    AboutIntro,
    Hero,
    SelectedBlogs,
    SelectedProjects,
    Stats,
    Testimonials,
} from "@/components";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutIntro />
            <Stats />
            <SelectedProjects />
            <Testimonials />
            <SelectedBlogs />
        </>
    );
}
