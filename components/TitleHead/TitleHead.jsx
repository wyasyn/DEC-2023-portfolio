import "./title.scss";

export default function TitleHead({ title, intro, describe }) {
    return (
        <header className="title">
            <div className="title-info">
                <h2>{intro}</h2>
                <p>{describe}</p>
                <p className="sub-title">
                    <div className="line"></div> <p>{title}</p>
                </p>
            </div>
        </header>
    );
}
