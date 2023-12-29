import {
    AboutIntro,
    Hero,
    Navbar,
    SelectedBlogs,
    SelectedProjects,
    Stats,
    Testimonials,
} from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutIntro />
            <Stats />
            <SelectedProjects />
            <Testimonials />
            <SelectedBlogs />
        </main>
    );
}
