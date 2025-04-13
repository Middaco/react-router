import { Link, NavLink } from "react-router-dom"

export default function Header(){
    const style = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    return (
        <nav className='nav-bar-container'>
            <Link to='/' className="logo">#VANLIFE</Link>
            <div className='link-container'>
                <NavLink className='link-text' style={({isActive}) => isActive ? style : null}to='/host'>Host</NavLink>
                <NavLink className='link-text' style={({isActive}) => isActive ? style : null}to='/about'>About</NavLink>
                <NavLink className='link-text' style={({isActive}) => isActive ? style : null}to='vans'>Vans</NavLink>
            </div>
        </nav>
    )
}