import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedInLinks = (props) => {
    return (
        <ul className="left yellow darken-3 consulting">
            <li><Link to='/flowroom/home'></Link></li>
            <li><Link to='/flowroom/about'></Link></li>
            <li><Link to='/flowroom/contact'></Link></li>

        </ul>,
        <ul className="right blue darken-1 activity">
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;
