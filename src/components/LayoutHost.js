import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function LayoutHost(){
    const style = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }
    
    return(
        <>
            <div className="filter-container">
                <div className="filter-list">
                    <NavLink end className='filter-list-element ' style={({isActive}) => isActive? style : null}to='/host'>Dashboard</NavLink>
                    <NavLink className='filter-list-element ' style={({isActive}) => isActive? style : null}to='/host/income'>Income</NavLink>
                    <NavLink className='filter-list-element ' style={({isActive}) => isActive? style : null}to='/host/vans'>Vans</NavLink>
                    <NavLink className='filter-list-element ' style={({isActive}) => isActive? style : null}to='/host/reviews'>Reviews</NavLink>
                </div> 
                <Link style={{color:"#161616"}} to='#'>Clear filters</Link>
            </div>
            <Outlet />
        </>
    )
}