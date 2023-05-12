import { Link } from "react-router-dom"
import { UserContext } from "./Usercontext"
import { useContext } from "react"


const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <header className=' flex flex-row justify-between w-screen items-center'>

                <a href='/' className='flex flex-row items-center'>
                    <img width={60} src='https://img.icons8.com/?size=512&id=iNYOCBSgQlYJ&format=png' alt='err' />
                    <span className='text-2xl font-bold'> HostNation </span>
                </a>

                <div className='flex flex-row items-center border shadow-xl m-3 p-1 rounded-3xl'>

                    <div className='m-2  flex justify-center'>
                        Anywhere
                    </div>
                    <div className='m-2 border-l border-gray-400 pl-2 flex justify-center'>
                        Any Week
                    </div>
                    <div className='m-2 border-l border-gray-400 pl-2 flex flex-row items-center  '>
                        Add guests
                        <button>
                            <img className='bg-red-400 rounded-full m-1 p-1' width={25} src='https://img.icons8.com/?size=512&id=Y6AAeSVIcpWt&format=png' alt='err' />
                        </button>
                    </div>
                </div>

                <div className='border border-gray-400 flex items-center m-3 justify-center h-10 rounded-full p-2'>
                    <Link to={user ? '/account/profile' : '/login'}>
                        <button>
                            <img className='w-6 pr-1' src='https://img.icons8.com/?size=512&id=8113&format=png' alt='err' />
                        </button>
                    </Link>
                    <button>
                        <img className='w-10 pl-1' src='https://img.icons8.com/?size=512&id=JesOX3f2LVdM&format=png' alt='err' />
                    </button>
                    {!!user && (
                    <div>
                        {user.name}
                    </div>
                )}
                </div>

            </header>
        </div>
    )
}

export default Header