import "./adminstat.scss";
export default function AdminStat({ title, stat }) {
    return (
        <article className="admin-stat">
            <h3>{title}</h3>
            <p>{stat}</p>
        </article>
    );
}
