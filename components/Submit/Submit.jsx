"use client";
import "./submit.scss";

export default function Submit({ value }) {
    return (
        <button className="submit-btn" type="submit">
            {value}
        </button>
    );
}
