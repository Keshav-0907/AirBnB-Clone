import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import MyPlaces from "./MyPlaces"
const {id} = useParams
export default function Places() {

    const { action } = useParams()
    console.log(action)

    const[title, settitle] = useState('')
    const[address, setaddress] = useState('')
    const[photolink, setphotolink] = useState('')
    const[description, setdescription] = useState('')
    // const[perks, setperks] = useState([])
    const[addedphoto, setaddedphoto] = useState('')
    // const[redirect, setredirect] = useState(false)

    async function addnewplace(e){
        e.preventDefault(e);
        const placedata = {title, address, photolink, description, addedphoto }
        const {data} = await axios.post('/places', placedata)
        alert('Place Saved')
        console.log(placedata)
    }
    async function addphotobylink(e) {
        e.preventDefault();
        const {data:filename} = await axios.post('/upload-by-link', {link : photolink})
        {
            setaddedphoto(prev => {
                return[ ...prev, filename]
            })
            setphotolink('')
    }}


    return (
        <>
            <div>
                {action !== 'new' && (
                    <>
                        <div className="flex justify-center">
                            <button className="bg-red-500 text-white p-3 rounded-full  mt-10"><Link to='/account/accomodations/new'>Add new Place</Link></button>
                        </div>
                        <h1 className="flex justify-center mt-10"> <MyPlaces/> </h1>
                    </>
                )}
                {action === 'new' && (
                    <div className="flex justify-center">
                        <form className="">
                            <div>
                                <h2 className="text-2xl font-semibold ml-4"> Title </h2>
                                <input 
                                className="border-solid border-2 border-gray-300 rounded-xl w-full p-2 mb-5" 
                                type="text" 
                                value={title}
                                placeholder="Add a catchy title " 
                                onChange={(e)=>settitle(e.target.value)}
                                />
                                
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold ml-4"> Address </h2>
                                <input 
                                className="border-solid border-2 border-gray-300 rounded-xl w-full p-2 mb-5" 
                                type="text" 
                                value={address}
                                onChange={(e)=>setaddress(e.target.value)}
                                placeholder="Address of the accomodation " />
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold ml-4"> Photos </h2>
                                <div className="flex flex-row">
                                    <input 
                                    className="border-solid border-2 border-gray-300 rounded-xl w-1/2 p-2 mb-5" 
                                    type="text" 
                                    value={photolink}
                                    onChange={(e)=>setphotolink(e.target.value)}
                                    placeholder="Add Image Link " />
                                    <button onClick={addphotobylink} className="bg-gray-300 grow rounded-full h-11 ml-3"> Add Photo </button>
                                </div>
                                <button className="w-full bg-gray-200 rounded-full p-1"> Upload from Device </button>
                            </div>
                            {addedphoto.length > 0 && addedphoto.map(link=> (
                                <>
                                <div className="flex justify-cente m-5">
                                    {/* {link} */}
                                    <img  className="w-1/4 border border-black rounded-lg" src={'http://localhost:3200/uploads/'+link} alt="err" />
                                </div>
                                </>
                            ))}

                            <div>
                                <h2 className="text-2xl font-semibold ml-4 mt-3"> Desciption </h2>
                                <textarea 
                                className="border-solid border-2 border-gray-300 pl-2 rounded-xl w-full mb-5 h-20" 
                                type="text" 
                                placeholder="Add a Description" 
                                value={description}
                                onChange={(e)=>setdescription(e.target.value)}
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold ml-4 mt-3"> Perks </h2>
                                <div className="grid grid-cols-3 gap-3 mt-3">
                                    <div className="border border-gray-300 bg-gray-200 w-full p-3">
                                        <input type="checkbox" name="Wifi" />
                                        <label> Wifi </label>
                                    </div>
                                    <div className="border border-gray-300 bg-gray-200 w-full p-3 ">
                                        <input type="checkbox" name="Parking-space" />
                                        <label> Parking space </label>
                                    </div>
                                    <div className="border border-gray-300 bg-gray-200 w-full  p-3">
                                        <input type="checkbox" name="Pets" />
                                        <label> Pets </label>
                                    </div>
                                    <div className="border border-gray-300 bg-gray-200 w-full p-3">
                                        <input type="checkbox" name="Radio" />
                                        <label> Radio </label>
                                    </div>
                                    <div className="border border-gray-300 bg-gray-200 w-full p-3">
                                        <input type="checkbox"  name="Water" />
                                        <label> 24*7 Water Supply </label>
                                    </div>
                                    <div className="border border-gray-300 bg-gray-200 w-full p-3">
                                        <input type="checkbox" name="park" />
                                        <label> Park </label>
                                    </div>
                                </div> 
                            </div>

                            <button className="bg-red-500 text-white p-3 rounded-full w-full mt-10" onClick={addnewplace}><Link>Add Accomodation</Link>  </button>

                        </form>
                    </div>
                )}
            </div>
        </>

    )
}
