"use client";
import axios from "axios";
import { useState } from "react";

const AddUser = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            axios
                .post("/api/user", formData)
                .then((res) => {
                    setFormData({
                        email: "",
                        username: "",
                        password: "",
                    });
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                });
        } catch (error) {
            console.log(err);
            throw error;
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-grp">
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-grp">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-grp">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button className="btn-c" type="submit">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;
