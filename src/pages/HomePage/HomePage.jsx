import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Collection, CollectionItem} from 'react-materialize';
import './HomePage.css';

const HomePage = ({handleFavorites, user}) => {
    return (
        user && user.recipes.length ? 
            <div className="container">
                <Collection header='Groceries'>
                    <p>🥖🥖🥖🥖🥖🥖🥖🥖🥖🥖</p>

                    {user.recipes.map((recipe, index) => {
                        let ingredients = recipe.recipeIngredients;
                        let updatedIngredients = ingredients.join(', ')

                        return (
                            <div key={recipe.recipeId}>
                                <hr />
                                <CollectionItem>
                                    <Link to={`/search/${recipe.id}`}>{recipe.recipeName}</Link>
                                    
                                    <br /><br />{updatedIngredients} <br /><br />
                                    <button className="favorite" onClick={() => handleFavorites(recipe.recipeId, recipe.recipeName, recipe.recipeIngredients)}>
                                        <Icon tiny className="favorite">favorite_border</Icon>
                                    </button>
                                    <br />
                                </CollectionItem>
                            </div>
                        )
                    })}  
                </Collection>

            </div>
        :
        <div className="container">
            <Collection header='Groceries'>
                <p>🥖🥖🥖🥖🥖🥖🥖🥖🥖🥖</p>
                <hr />
                <CollectionItem>
                    <Link to='/search'>Sign up or search through recipes to begin!</Link>
                </CollectionItem>
            </Collection>
        </div>
    )
}

export default HomePage;