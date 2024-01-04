import { AdminStat } from "@/components";

export default function page() {
    return (
        <section>
            <div className="admin-stats">
                <AdminStat title="Total Projects" stat={10} />
                <AdminStat title="Total Blogs" stat={7} />
                <AdminStat title="Total Users" stat={3} />
            </div>
        </section>
    );
}
