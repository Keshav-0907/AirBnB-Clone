import { Link } from "react-router-dom"
// import { UserContext } from "../Usercontext"
// import { useContext } from "react"

const IndexPage = () => {
    // const { user } = useContext(UserContext)
    return (

            <div className="mb-10">
                <p> Index page</p>
                <a href="http://localhost:3200/users" target="_blank" rel="noreferrer">User API</a>
                <a href="http://localhost:3200/placess" target="_blank" rel="noreferrer">Places API</a>

            </div>

    )
}

export default IndexPage