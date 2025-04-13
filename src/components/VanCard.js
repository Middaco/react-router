import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
export default function VanCard(
    props
){
    const [searchParams, setSearchParams] = useSearchParams()
    const typeTagColor= 
        props.type === 'simple' ? 
        ' #E17654'
        :
        props.type === 'rugged' ?
        ' #115E59'
        :
        ' #161616'
    return(
        <Link style={{textDecoration: 'none', color:'inherit'}}to={props.id} state={{search: searchParams.toString()}}>
        <div className="van-card">
            
                <img className='van-img' src={props.vanImgSrc} alt="van"/>
                <div className="headline">
                    <h3>{props.vanName}</h3>
                    <h3 className="price-tag">${props.vanPrice}</h3>
                </div>
                <div className="bottomline">
                    <div 
                        className='type-tag'
                        style={{
                            backgroundColor: typeTagColor
                        }}
                    >
                        {props.type}
                    </div>
                    <>/day</>
                </div>
            

        </div>
        </Link>
    )
}