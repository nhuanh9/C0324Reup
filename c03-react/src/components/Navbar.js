import {Component, useContext} from "react";
import {Link} from "react-router-dom";
import {MyContext} from "../MyContext";

export default function Navbar() {
    let {currentUser} = useContext(MyContext);
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Home <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/cart'}>Cart</Link>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <button className="btn btn-outline-success my-2 my-sm-0">
                                <Link to={'/'}>Login</Link>
                            </button>
                            <button className="btn btn-outline-success my-2 my-sm-0 ml-2">
                                <Link to={'/register'}>Register</Link>
                            </button>
                            <span>{currentUser.username}</span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}