"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const AddUser = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [message, setMessage] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);

                // Optionally, you can reset the form or redirect the user after successful submission
                setFormData({
                    email: "",
                    username: "",
                    password: "",
                });
                {
                    message && toast.success(message);
                }
            } else {
                setMessage(data.message);
                {
                    message && toast.error(message);
                }
            }
        } catch (error) {
            console.error("Error adding user:", error);
            setMessage("Something went wrong");
            {
                message && toast.error(message);
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
