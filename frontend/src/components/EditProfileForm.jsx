import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfileForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Get the user's info from the backend
        fetch("http://localhost:5000/api/auth/me", {
            headers: {
                "Content-Type": "application/json",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setName(data.name);
                setEmail(data.email);
            }
        });
    }, []);

const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
    }
    fetch("http://localhost:5000/api/auth/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            setError(data.error);
        } else {
            setSuccess("Profile updated successfully");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    });
};

    return (
        <div className="edit-profile-form">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">Edit profile</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">New password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm new password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
}

export default EditProfileForm;


