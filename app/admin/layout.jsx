export default function Layout({ children }) {
    return (
        <section className="dashboard container">
            <h2>Welcome Yasin!</h2>
            <div className="admin">
                <nav className="admin-nav">
                    <a href="/admin">Dashboard</a>
                    <a href="/admin/add-project">add Project</a>
                    <a href="/admin/add-blog">add blog</a>
                    <a href="/admin/add-user">add user</a>
                </nav>
                <div className="content">{children}</div>
            </div>
        </section>
    );
}
