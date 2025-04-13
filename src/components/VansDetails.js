import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
export default function VansDetails(){
    const params = useParams()
    const [van, setVan] = useState()
    const location = useLocation()
    const message = location.state?.search.split('=')[1] || "all"
    console.log(location)
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans))
    }, [params.id])        

    return (
        <div>
            <Link 
                to={`..?${location.state.search}`} 
                relative="path"
            >&larr; Back to {message} vans
            </Link>
            {van?
                <div className="van-details-container">
                    <img className='van-img' src={van.imageUrl} />
                    <p 
                        className="type-tag" 
                        style={{
                            backgroundColor: 
                                van.type === 'simple' ? 
                                ' #E17654'
                                :
                                van.type === 'rugged' ?
                                ' #115E59'
                                :
                                ' #161616'
                        }}
                    >{van.type}</p>
                    <h1>{van.name}</h1>
                    <h2>${van.price}</h2>
                    <p>{van.description}</p>
                    <button>Rent this van</button>
                    
                </div>
            :
                <p>Loading...</p>
            }
        </div>
    )
}