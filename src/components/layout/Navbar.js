import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const Navbar = (props) => {
/*     console.log(props)
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)  */
    return (
        <nav className="nav-wrapper purple lighten-5">
            <div className="container">
                <ul className="right blue darken-1 activity">
                    <SignedOutLinks/>
                    <SignedInLinks/>
                </ul>
                <ul className="left yellow darken-3 consulting">
                    <li><Link to="/flowroom/home">Home</Link></li>
                    <li><Link to="/flowroom/about">About</Link></li>
                    <li><NavLink to="/flowroom/contact">Contact</NavLink></li> {/* NavLink permits to have a class active, it helps to stylizing when URL matches */}
                </ul>

            </div>
        </nav>
    )
}

export default withRouter(Navbar);