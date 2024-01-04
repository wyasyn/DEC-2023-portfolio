import { socialsdata } from "@/constants/data";
import "./contact.scss";
import Link from "next/link";
import axios from "axios";

async function getFormData(formData) {
    "use server";
    try {
        const Data = {
            name: formData.get("name")?.toString(),
            email: formData.get("email")?.toString(),
            message: formData.get("message")?.toString(),
        };
        const res = await axios.post("http://localhost:3000/api/send", Data);
        if (res) {
            console.log(res.data);
        }
    } catch (error) {
        console.log(error);
    }
}

export default function page() {
    return (
        <div className="contact">
            <div className="container">
                <h1>Contact Me</h1>
                <div className="row">
                    <div className="col-1">
                        {socialsdata.map((item) => (
                            <Link
                                href={item.url}
                                className="cnt"
                                key={item.name}
                            >
                                <div className="icon">{item.icons}</div>
                                <h4>{item.name}</h4>
                            </Link>
                        ))}
                    </div>
                    <div className="col-2">
                        <h3>
                            Have a Question? or Just want to say Hi? Drop me a
                            message!
                        </h3>
                        <form className="form" action={getFormData}>
                            <div className="form-grp">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your full name"
                                    required
                                    autoComplete="false"
                                />
                            </div>
                            <div className="form-grp">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    required
                                    autoComplete="false"
                                />
                            </div>
                            <div className="form-grp">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    rows={10}
                                    placeholder="Enter your message here"
                                    required
                                    autoComplete="false"
                                />
                            </div>
                            <button className="btn-c" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map" id="location">
                <div className="imap">
                    <iframe
                        title="location"
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kyaliwajjala,%20Wakiso+(Primates%20Code)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a href="https://www.maps.ie/population/">
                            Population mapping
                        </a>
                    </iframe>
                </div>
            </div>
        </div>
    );
}
