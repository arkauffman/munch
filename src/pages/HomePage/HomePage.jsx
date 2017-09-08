import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Collection, CollectionItem} from 'react-materialize';

const HomePage = ({handleFavorites, user, recipes}) => {
    return (
        user && user.recipes.length && recipes ? 
            <div className="container">
                <Collection header='Grocery List'>
                    <br />
                    <span role="img" aria-label="Bread">🥖🥖🥖🥖🥖🥖🥖🥖🥖🥖</span>

                    {user.recipes.map((recipe, index) => {
                        let ingredients = recipe.recipeIngredients;
                        let updatedIngredients
                        if (recipe.recipeIngredients) {
                            updatedIngredients = ingredients.join(', ')
                        }

                        return (
                            <div key={recipe.recipeId}>
                                <br /><hr />
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