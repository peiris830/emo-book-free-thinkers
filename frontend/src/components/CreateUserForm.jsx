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
            <div className="form-row">
                <div className="column-len7">
                <input type="text" className="form-control my-3 p-4" placeholder="Full Name"
                       value={name} onChange={event => setName(event.target.value)} />
                </div>
            </div>
            <div className="form-row">
                <div className="column-len7">
            <input type="text" className="form-control my-3 p-4" placeholder="Phone"
                   value={phone} onChange={event => setPhone(event.target.value)} />
                </div>
            </div>
            <div className="form-row">
                <div className="column-len7">
            <input type="text" className="form-control my-3 p-4" placeholder="Email"
                   value={email} onChange={event => setEmail(event.target.value)} />
                </div>
            </div>
            <div className="form-row">
                <div className="column-len7">
            <input type="password" className="form-control my-3 p-4" placeholder="Create a Password"
                   value={password} onChange={event => setPassword(event.target.value)} />
                </div>
            </div>
            <button type="submit">Create User</button>
        </form>
    );
}

export default CreateUserForm;