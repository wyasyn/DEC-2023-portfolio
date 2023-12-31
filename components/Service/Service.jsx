import { TiTick } from "react-icons/ti";
import "./service.scss";

export default function Service({ title, line, icon }) {
    return (
        <article className="service">
            <div className="icon">{icon}</div>
            <div className="infor">
                <h3>{title}</h3>
                <p>{line}</p>
            </div>
        </article>
    );
}
