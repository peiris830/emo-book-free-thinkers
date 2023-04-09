import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                localStorage.setItem("token", data.token);
                window.location.href = "/";
            }
        });

    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">Log in</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>
                <p className="text-center"><Link to="/signup">Create an account</Link></p>
            </form>
        </div>
    );
}

export default LoginForm;