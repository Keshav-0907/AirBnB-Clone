import axios from "axios"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { UserContext } from "../Usercontext"

export const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [redirect, setredirect] = useState("")
    const { setUser } = useContext(UserContext)

    const handlelogin = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/login', { email, password })
            setUser(data)
            alert("Login Succesful")
            setredirect(true)
        } catch (error) {
            console.log(error)
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (

        <>
            <div className="mt-20">
                <div className="flex justify-center">
                    <h1 className="text-2xl font-semibold"> Login  </h1>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col w-1/4">

                        <input
                            className="border border-slate-800 rounded-2xl p-2 m-2"
                            value={email}
                            placeholder="Email ID"
                            onChange={(e) => setemail(e.target.value)}
                        />

                        <input
                            className="border border-slate-800 rounded-2xl p-2 m-2"
                            value={password}
                            type="password"
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Password" />

                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={handlelogin} className="bg-red-600 w-1/5 rounded-2xl m-2 p-1 text-white"> Log In </button>
                </div>
                <div className="flex justify-center">
                    Not Registered ?? <Link to="/register">Register Now</Link>
                </div>
            </div>

        </>
    )
}
