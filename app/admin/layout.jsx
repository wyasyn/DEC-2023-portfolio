import "./admin.scss";
import AdminNav from "./adminNav";
export default function Layout({ children }) {
    return (
        <section className="dashboard container">
            <h1>Hi, Yasin!</h1>
            <div className="admin">
                <AdminNav />
                <div className="content">{children}</div>
            </div>
        </section>
    );
}
