import React from 'react';
// import {Link} from 'react-router-dom';
import {Button, Icon, Collection, CollectionItem} from 'react-materialize';
import './SearchPage.css';

const SearchPage = ({updateSearchValue, recipes}) => {
    console.log('recipessss', recipes)
    if (recipes !== null) {
        return (
            recipes ? 
            <div className="container">
                <Collection header='Recipes'>
                <input type="search" placeholder="Search Recipes..." onChange={updateSearchValue}/>

                {recipes.matches.map((recipe, index) => {
                    let title = recipe.id.split('-');
                    title.splice(title.length - 1, 1);
                    let updatedTitle = title.join(' ');
                    
                    let ingredients = recipe.ingredients;
                    let updatedIngredients = ingredients.join(', ')
                    let rating = recipe.rating;

                    let ratingArr = new Array(recipe.rating);
                    ratingArr.fill(1);
                    {/* console.log(ratingArr) */}

                    return (
                        <div key={recipe.id}>
                                <hr />
                                <br />
                                <CollectionItem>
                                    <img src={recipe.imageUrlsBySize[90]} className="search-image" /> <br />
                                    {updatedTitle} <br />
                                    {updatedIngredients} <br /><br />
                                    {recipe.rating} stars
                                    <br /> <br />
                                    <Icon tiny className="favorite">favorite_border</Icon>
                                </CollectionItem> 
                        </div>
                    )
                })}
                </Collection>   
            </div>
            :
            <div>
                <p>Loading!</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>Loading!</p>
            </div>
        )
    }


};

export default SearchPage;