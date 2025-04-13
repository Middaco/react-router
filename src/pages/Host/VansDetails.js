import { useOutletContext } from "react-router"

export default function HostVansDetails() {
    const van = useOutletContext()

    return (
        <div className="details-container">
            <p style={{display:"inline", fontWeight:"bold"}} className="bold-start-text">Name: </p>
            <p style={{display: "inline"}}>{van?.name}</p>
            <br/>
            <br/>
            <p style={{display:"inline", fontWeight:"bold"}} className="bold-start-text">Category: </p>
            <p style={{display: "inline"}}>{van?.type}</p>
            <br/>
            <br/>
            <p style={{display:"inline", fontWeight:"bold"}} className="bold-start-text">Description: </p>
            <p style={{display: "inline"}}>{van?.description}</p>
            <br/>
            <br/>
            <p style={{display:"inline", fontWeight:"bold"}} className="bold-start-text">Visibility: </p>
            <p style={{display: "inline"}}>{van?.visibility}</p>
        </div>
    )
}