import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ? 
        <div>
            <nav>
                <Link to='/' className='Left'>🥖</Link>
                <Link to='/' className='brand-logo center'>Munch</Link>
                <Link to='' className='Right' onClick={props.handleLogout}><Icon tiny>exit_to_app</Icon></Link>
                <Link to='/settings' className='Right'><Icon tiny>settings</Icon></Link>
                <Link to='/search' className='Right'><Icon>search</Icon></Link>
            </nav>
            <p className="Welcome">Welcome, {props.user.name}! </p>
        </div>
    :
        <div>
            <nav>
                <Link to='/' className='brand-logo center'>Munch</Link>
                <Link to='/login' className='Right'>LOG IN</Link>
                <Link to='/signup' className='Right'>SIGN UP&nbsp;&nbsp;|</Link>
            </nav>
        </div>
    
    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;