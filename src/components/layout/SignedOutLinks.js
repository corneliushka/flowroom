import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedOutLinks = (props) => {
    return (
        <ul className="left yellow darken-3 consulting">
            <li><Link to='/flowroom/home'></Link></li>
            <li><Link to='/flowroom/about'></Link></li>
            <li><Link to='/flowroom/contact'></Link></li>
        </ul>,
        <ul className="right blue darken-1 activity">
            <li><NavLink to='/'>Signup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;
