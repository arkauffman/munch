import React from 'react';
// import {Link} from 'react-router-dom';
import {Collection, CollectionItem} from 'react-materialize';
import './FavoritesPage.css';

const FavoritesPage = (props) => {
    let favorites = props.user ? 
        <div>
            <div className="Favorites-Page">
                <span>Welcome, {props.user.name}!</span>
            </div>

            <div className="container">
                <div className="row">
                    <div class="col s12">
                        <Collection header='Favorites'>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                            <CollectionItem>Alvin</CollectionItem>
                        </Collection>
                    </div>
                </div>
            </div>
        </div>
    :
        <div>
            <span>Sign up!</span>
        </div>
    
    return (
        <div className='HomePage'>
            {favorites}
        </div>
    );
};

export default FavoritesPage;