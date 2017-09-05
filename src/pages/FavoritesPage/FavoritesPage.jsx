import React from 'react';
// import {Link} from 'react-router-dom';
import {Collection, CollectionItem} from 'react-materialize';
import './FavoritesPage.css';

const FavoritesPage = ({props, recipes}) => {
    if (recipes !== null) {
        var currentRecipe = recipes.matches.find((recipe) => {
            return props.match.params.id === recipe.id;
        });
    }

    currentRecipe ? 
        <div>

            <div className="container">
                <div className="row">
                    <div className="col s12">
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
            {currentRecipe}
        </div>
    );
};

export default FavoritesPage;