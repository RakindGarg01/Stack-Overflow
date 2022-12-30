import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar';
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode'
const Navbar = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    var User = useSelector((state) => (state.currentUserReducer));
    const [isNavbarOpen, setNavbarOpen] = useState(false)
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        Navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [User?.token, dispatch])

    const toggleNavbar = () => {
        isNavbarOpen ? setNavbarOpen(false) : setNavbarOpen(true)
    }


    return (
        <div className='main-nav'>
            <div className="navbar">

                    <i onClick={toggleNavbar} className="fas fa-bars fa-lg ham"></i>
                    <Link to='/' className="nav-item nav-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                

                <div className={`collapse-sm ${isNavbarOpen ? "open" : ""}`}>
                    <Link to='/' className="nav-item nav-btn">About</Link>
                    <Link to='/' className="nav-item nav-btn">Products</Link>
                    <Link to='/Community' className="nav-item nav-btn">Community</Link>
                    <form>
                        <input type="text" placeholder="Search..." />
                        <img src={search} width="18" alt="search" className='search-icon' />
                    </form>
                    
                </div>
                <div className="login-info">
                {User === null ?
                    <Link to='/Auth' className="nav-item nav-links">Log In</Link> :
                    <>
                        <Avatar backgroundColor='#009dff' px="12px" py="7px" borderRadius="50%" color='white'>
                            <Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: 'none' }}>
                                {User.result.name.charAt(0).toUpperCase()}
                                {/* user */}
                            </Link>
                        </Avatar>

                        <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
                    </>
                }
                </div>
                
            </div>
        </div>


    )
}

export default Navbar