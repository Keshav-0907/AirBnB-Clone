import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { UserContext } from "../Usercontext";
import axios from "axios";
import Places from "./Places";

export default function Account() {

    const { user } = useContext(UserContext)

    let { subpage } = useParams();
    function linkClasses(type = '') {
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
        if (type === subpage) {
            classes += ' bg-primary text-white';
        } else {
            classes += ' bg-gray-200';
        }
        return classes;
    }

    async function logout() {
        await axios.post('/logout')
    }


    return (
        <>
            <div className="flex justify-around mt-4">
                <Link className={linkClasses('profile')} to='/account/profile'> My Profile </Link>
                <Link className={linkClasses('bookings')} to='/account/bookings'> My Bookings </Link>
                <Link className={linkClasses('accomodations')} to='/account/accomodations'> My Accomodations </Link>
            </div>
            <div>
                {subpage === 'profile' && (
                    <div className='flex flex-col mt-5'>
                        {user ? (
                            <>
                                <div className="text-xl flex justify-center">
                                    <h1> Hello `{user.name}` 👋 </h1>
                                </div>
                                <div className="text-xl flex justify-center mt-5">
                                    <p> Email id : {user.email}</p>
                                </div>

                                <div className="flex justify-center mt-4">
                                    <button className="bg-red-500 text-white p-3 rounded-full w-80" onClick={logout}> Logout </button>
                                </div>
                            </>
                        ) : (
                            <h1> No user Logged In</h1>
                        )}
                    </div>
                )}

                {subpage === 'bookings' && (
                    <div>
                        <h1> Bookings </h1>
                    </div>
                )}

                {subpage === 'accomodations' && (
                    <div className="flex justify-center">
                        <Places/>
                    </div>
                )}
            </div>
        </>
    )
}

