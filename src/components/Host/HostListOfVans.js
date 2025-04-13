import { useEffect, useState } from "react"
import HostVanCard from "./HostVanCard"

export default function HostListOfVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <div className="host-vans-container">
            {vans.map(van => {
                return (
                    <HostVanCard
                        id={van.id}
                        imageUrl={van.imageUrl}
                        name={van.name}
                        price={van.price}
                    />
                )
            })}
        </div>
        
    )
}