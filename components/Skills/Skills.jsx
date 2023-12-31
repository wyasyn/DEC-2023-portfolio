import { ServicesData, skillsData } from "@/constants/data";
import { TitleHead } from "..";
import "./skills.scss";
import { MdComputer } from "react-icons/md";

export default function Skills() {
    return (
        <section className="skills">
            <div className="container">
                <div className="col-1">
                    <TitleHead
                        title="My Skills"
                        intro="What my dev skills include"
                        describe="These are the words we live by in everything we do."
                    />
                    <div className="skills-content">
                        {skillsData.map((item) => (
                            <div className="skill-item" key={item.skill}>
                                <h4>{item.skill}</h4>
                                <h4>{item.percent}%</h4>
                                <div
                                    className="line"
                                    style={{ width: `${item.percent}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-2">
                    {ServicesData.map((item) => (
                        <div className="service-item" key={item.title}>
                            <div className="icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <div className="info">
                                <h5>{item.title}</h5>
                                <small>{item.describe}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
