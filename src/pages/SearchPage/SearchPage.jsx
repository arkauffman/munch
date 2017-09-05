import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Collection, CollectionItem} from 'react-materialize';
import './SearchPage.css';

const SearchPage = ({handleSearch, updateSearchValue, recipes}) => {
    if (recipes !== null) {
        return (
            recipes ? 
            <div className="container">
                <Collection header='Recipes'>
                
                <form onSubmit={(e) => handleSearch(e)}>
                    <input type="search" placeholder="Search Recipes..." onChange={updateSearchValue} />
                </form>

                {recipes.matches.map((recipe, index) => {
                
                    let ingredients = recipe.ingredients;
                    let updatedIngredients = ingredients.join(', ')
                    
                    {/* let rating = recipe.rating;
                    let ratingArr = new Array(recipe.rating);
                    ratingArr.fill(1); */}
                    {/* console.log(ratingArr) */}

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
                                    {recipe.rating} stars
                                    <br /> <br />
                                    <Link to={`/favorites/${recipe.id}`}><Icon tiny className="favorite">favorite_border</Icon></Link>
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
    } else {
        return (
            <div className="container">
                <p>Loading!</p>
            </div>
        )
    }
};

export default SearchPage;