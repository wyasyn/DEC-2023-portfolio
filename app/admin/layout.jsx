export default function Layout({ children }) {
    return (
        <main>
            <nav className="admin-nav">
                <a href="/admin">Dashboard</a>
                <a href="/admin/add-project">add Project</a>
                <a href="/admin/add-blog">add blog</a>
                <a href="/admin/add-user">add user</a>
            </nav>
            {children}
        </main>
    );
}
