import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/Auth'

const Navbar = () => {

    const { isAuth } = useAuthContext()
    console.log('isAuth', isAuth)

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <Link to={"/"} className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={"/company"} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={"/services/development"} className="dropdown-item">Development</Link></li>
                                    <li><Link to={"/services/Designing"} className="dropdown-item" >Designing</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to={"/services/marketing"} className="dropdown-item">Marketing</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        <div className="d-flex gap-2" >
                            <Link to='/auth/login' className="btn btn-primary">Login</Link>
                            <Link to='/auth/register' className="btn btn-secondary">Register</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
