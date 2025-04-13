import { useOutletContext } from "react-router"

export default function HostVansPricing() {
    const van = useOutletContext()
    
    return(
        <div>
            <h2 style={{display:"inline"}}>${van.price}</h2>
            <p style={{display:"inline"}}> /day</p>
        </div>
    )
}