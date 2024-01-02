"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

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
                .post("/api/user", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
                .then((res) => {
                    setFormData({
                        email: "",
                        username: "",
                        password: "",
                    });
                    {
                        res.message && toast.success(res.message);
                    }
                })
                .catch((err) => {
                    toast.error(err);
                });
        } catch (error) {
            {
                error.message && toast.error(error.message);
            }
        }
    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
