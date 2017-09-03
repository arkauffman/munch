import React from 'react';
// import {Link} from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = (props) => {
    let settings = props.user ? 
        <div className="SearchPage">
            <div className="row">
                <form class="col s12">
                    
                    <div class="row">
                        <div class="input-field col s6 offset-s6">
                            <input type="search" placeholder="Search Recipes..." />
                        </div>
                    </div>

                </form>
            </div>
        </div>
        :
        <div>
            <span>Sign in</span>
        </div>
    
    return (
        <div className='NavBar'>
            {settings}
        </div>
    );
};

export default SettingsPage;