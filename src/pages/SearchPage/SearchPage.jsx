import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Collection, CollectionItem} from 'react-materialize';
import './SearchPage.css';

const SearchPage = ({user, handleFavorites, handleSearch, updateSearchValue, recipes}) => {
    return (
        recipes && user ? 
        <div className="container">
            <Collection header='Recipes'>
                
                <form onSubmit={(e) => handleSearch(e)}>
                    <input type="search" placeholder="Search Recipes..." onChange={updateSearchValue} />
                </form>

                {recipes.matches.map((recipe, index) => {
                    let ingredients = recipe.ingredients;
                    let updatedIngredients = ingredients.join(', ');
                    
                    let rating = recipe.rating;
                    let ratingArr = new Array(recipe.rating);
                    ratingArr.fill(<Icon>star_border</Icon>); 

                    return (
                        <div key={recipe.id}>
                                <hr />
                                <br />
                                <CollectionItem>
                                    <Link to={`/search/${recipe.id}`}>
                                        <img src={recipe.imageUrlsBySize[90]} className="search-image" /><br />
                                    </Link>
                                    {recipe.recipeName} <br />
                                    {updatedIngredients} <br /><br />
                                    {ratingArr}<br /><br />
                                    
                                    <button className="favorite" onClick={() => handleFavorites(recipe.id, recipe.recipeName, recipe.ingredients)}>
                                        <Icon tiny className="favorite">favorite_border</Icon>
                                    </button>
                                        
                                </CollectionItem> 
                        </div>
                    )
                })}
            </Collection>   
        </div>
        :
        <div className="container">
            <p>Loading!</p>
        </div>
    )
}

export default SearchPage;