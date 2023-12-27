import {
    AboutIntro,
    Hero,
    Navbar,
    SelectedProjects,
    Stats,
} from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutIntro />
            <Stats />
            <SelectedProjects />
        </main>
    );
}
