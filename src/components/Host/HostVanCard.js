import { Link } from "react-router-dom";

export default function HostVanCard(
    {
        id,
        imageUrl,
        name,
        price
    }
){
    return (
        <Link className="host-van-card" to={id}>
            <img src={imageUrl} alt={name} />
            <div className="host-van-card-info">
                <h3 style={{marginBottom:"5px"}}>{name}</h3>
                <p style={{marginTop:"5px"}}>${price}/day</p>
            </div>
        </Link>
    )
}