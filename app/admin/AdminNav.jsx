import { MdLogout } from "react-icons/md";
import AdminLink from "./AdminLink";

const Nlinks = [
    {
        name: "Dashborad",
        url: "/admin",
    },
    {
        name: "Projects",
        url: "/admin/projects",
    },
    {
        name: "Blog",
        url: "/admin/blog",
    },
    {
        name: "Users",
        url: "/admin/user",
    },
];
export default function AdminNav() {
    return (
        <nav className="admin-nav">
            {Nlinks.map((item) => {
                return <AdminLink key={item.name} {...item} />;
            })}
            <form action="">
                <button className="logout" type="submit">
                    <MdLogout /> Logout
                </button>
            </form>
        </nav>
    );
}
