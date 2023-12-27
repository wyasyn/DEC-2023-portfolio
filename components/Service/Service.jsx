import { TiTick } from "react-icons/ti";
import "./service.scss";

export default function Service({ title, describe }) {
    return (
        <article className="service">
            <div className="icon">
                <TiTick />
            </div>
            <div className="infor">
                <h3>{title}</h3>
                <p>{describe}</p>
            </div>
        </article>
    );
}
