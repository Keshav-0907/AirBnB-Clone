import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function MyPlaces() {

    const [places, setplaces] = useState("")

    useEffect(() => {
        axios.get('/places').then(({ data }) => {
            setplaces(data)
        })
    })

    return (
        <>
            <div>
                <div className="flex justify-center">
                    <h1 className="font-bold text-3xl">My Placesss</h1>
                </div>
                {places.length > 0 && places.map(place => (
                    <>
                        <div className="bg-yellow-200 m-3 flex flex-row rounded-lg">
                            <div className="w-1/6 p-3">
                                <img src={place.photolink} alt="err" />
                            </div>

                            <div>
                                <h1 className="font-extrabold text-2xl bg-slate-500 text-white p-3 m-3 rounded-3xl inline-block"> {place.title} </h1>
                                <h2> 
                                    <span className="font-bold">Address : </span> {place.address} 
                                    
                                </h2>
                                <p> <span className="font-bold">Description : </span> {place.description}</p>
                            </div>
                            <div>
                                <button className="bg-red-500 text-white p-3 rounded-full  mt-10"><Link to='/account/accomodations/new'>Update Place</Link></button>
                            </div>
                        </div>

                    </>
                ))}
            </div>

        </>
    )
}