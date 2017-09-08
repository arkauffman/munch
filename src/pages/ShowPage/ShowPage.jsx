import React from 'react';
import {Icon, Collection, CollectionItem} from 'react-materialize';

const ShowPage = ({props, recipes}) => {
    if (recipes !== null) {
        var currentRecipe = recipes.matches.find((recipe) => {
            return props.match.params.id === recipe.id;
        });
    }

    let updatedIngredients = [];
    let ratingArr = [];
    if (currentRecipe) {
        let ingredients = currentRecipe.ingredients;
        updatedIngredients = ingredients.join(', ')
        ratingArr = new Array(currentRecipe.rating);
        ratingArr.fill(<Icon tiny>star_border</Icon>); 
    }

    return (
        currentRecipe ?
        <div className="container">
            <Collection key={currentRecipe.id} header={currentRecipe.recipeName}>
                <CollectionItem>
                    <br /> <img src={currentRecipe.imageUrlsBySize[90]} alt="Recipe" /> <br />
                    <br /> {updatedIngredients} <br />
                    <br /> {ratingArr} <br /><br />
                    Source: {currentRecipe.sourceDisplayName}
                </CollectionItem>
            </Collection>
        </div>
        :
        <div className="container">
            <p>Loading!</p>
        </div>
    )
};

export default ShowPage;