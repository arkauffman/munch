import React from 'react';
// import {Link} from 'react-router-dom';
// import {Button, Icon, Input, Collection, CollectionItem} from 'react-materialize';
import './SearchPage.css';

const SearchPage = (props) => {
    let nav = props.user ? 
        <div className="SearchPage">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 offset-s6">
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
            {nav}
        </div>
    );
};

export default SearchPage;