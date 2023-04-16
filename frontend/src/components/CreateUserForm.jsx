import {useState} from "react";
import userService from "../utils/userService";

function CreateUserForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const user = {
            name,
            phone,
            email,
            password
        };

        try {
            const newUser = await userService.createUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={event => setName(event.target.value)} />
            </label>
            <label>
                Phone:
                <input type="text" value={phone} onChange={event => setPhone(event.target.value)} />
            </label>
            <label>
                Email:
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label>
            <button type="submit">Create User</button>
        </form>
    );
}