import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ? 
        <div>
            <nav>
                <Link to='/' className='Left'><span role="img" aria-label="Bread" className="loaf">🥖</span>&nbsp;&nbsp; Welcome, {props.user.name}!</Link>
                <Link to='/' className='brand-logo center'>Munchin'</Link>
                <Link to='/logout' className='Right' onClick={props.handleLogout}><Icon tiny className="icon">exit_to_app</Icon></Link>
                <Link to='/settings' className='Right'><Icon tiny className="icon">settings</Icon></Link>
                <Link to='/search' className='Right'><Icon className="icon">search</Icon></Link>
            </nav>
        </div>
    :
        <div>
            <nav>
                <Link to='/' className='Left'><span role="img">🥖</span></Link>
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