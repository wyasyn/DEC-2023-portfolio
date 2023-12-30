import { skillsData } from "@/constants/data";
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
                    <div className="service-item">
                        <div className="icon">
                            <MdComputer />
                        </div>
                        <h4>Web Dev</h4>
                        <div className="info">
                            <h5>Web dev</h5>
                            <small>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae recusandae site
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
