import "./process.scss";

export default function Process() {
    const proce = [
        {
            title: "Research Project",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
            title: "Evaluate Plans",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
        {
            title: "Best Results",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        },
    ];
    return (
        <section className="process">
            <div className="container">
                <h2>
                    <span>Process</span> I follow
                </h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem esse reprehenderit ducimus.
                </p>
                <div className="pros">
                    {proce.map((item, index) => (
                        <div className="article" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="num">0{index + 1}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
