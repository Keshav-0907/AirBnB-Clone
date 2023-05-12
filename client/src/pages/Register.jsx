import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'


export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Registration successful ');
        } catch (e) {
            alert('Registration Error');
            console.log(e)
        }
    }
    return (
        <div className="mt-4 grow flex items-center flex-col justify-around">
            <div className="mb-64 flex flex-col w-full  ">
                <h1 className=" text-center text-2xl font-semibold">Register</h1>
                <form className="max-w-md mx-auto flex flex-col w-full " onSubmit={registerUser}>
                    <input type="text"
                        className="border border-slate-800 rounded-2xl p-2 m-2"
                        placeholder="Name"
                        value={name}
                        onChange={ev => setName(ev.target.value)} />
                    <input type="email"
                        placeholder="Email ID"
                        className="border border-slate-800 rounded-2xl p-2 m-2"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password"
                        placeholder="Password"
                        className="border border-slate-800 rounded-2xl p-2 m-2"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="bg-red-600  rounded-2xl m-2 p-1 text-white">Register</button>
                    <div className="flex justify-center">
                    Already Registered ?? <Link to="/login">Login Now</Link>
                </div>
                </form>
            </div>
        </div>
    )
}
