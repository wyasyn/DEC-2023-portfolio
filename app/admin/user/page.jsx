import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div className="admin-projects">
            <div className="admin-title">
                <h2>Users</h2>
                <Link href="/admin/add-user">Add User</Link>
            </div>
            <div className="table">users</div>
        </div>
    );
}
