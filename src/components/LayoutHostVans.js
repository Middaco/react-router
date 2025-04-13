import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router"
import { Link } from "react-router-dom"


export default function LayoutHostVans() {
    const parameters = useParams()
    const [van, setVan] = useState({})
    const typeTagColor= 
        van.type === 'simple' ? 
        ' #E17654'
        :
        van.type === 'rugged' ?
        ' #115E59'
        :
        ' #161616'

    useEffect(() => {
        fetch('/api/host/vans/' + parameters.id)
            .then(response => response.json())
            .then(data => setVan(data.vans[0]))
    })

    if(!van){
        <h1>Loading...</h1>
    }

    return (
        <div className="host-van-details">
            <Link to=".." relative="path">Back to all vans</Link>
            <div className="host-van-details-header">
                <img src={van.imageUrl} alt={van.name} />
                <div className="host-van-details-header-info">
                    <div 
                        className='type-tag'
                        style={{
                            backgroundColor: typeTagColor,
                            width: 'fit-content',
                        }}
                    >
                        {van.type}
                    </div>
                    <h2>{van.name}</h2>
                    <h3 style={{display:"inline"}}>${van.price}</h3><p style={{display:"inline"}}>/day</p>
                </div>
            </div>
            <nav className="host-van-details-nav">
                <ul className="link-container">
                    <Link to={`/host/vans/${parameters.id}`} className="link-text">Details</Link>
                    <Link to={`/host/vans/${parameters.id}/pricing`} className="link-text">Pricing</Link>
                    <Link to={`/host/vans/${parameters.id}/photos`} className="link-text">Photos</Link>
                </ul>
            </nav>
            <Outlet context={van}/>
        </div>
    )
}