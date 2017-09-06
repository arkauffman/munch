import React from 'react';
import {Icon, Collection, CollectionItem} from 'react-materialize';
import './ShowPage.css';

const ShowPage = ({props, recipes}) => {
    if (recipes !== null) {
        var currentRecipe = recipes.matches.find((recipe) => {
            return props.match.params.id === recipe.id;
        });
    }

    let updatedIngredients = [];
    if (currentRecipe) {
        let ingredients = currentRecipe.ingredients;
        updatedIngredients = ingredients.join(', ')
    }

    console.log('CURRENT RECIPE!!!', currentRecipe)
    return (
        currentRecipe ?
        <div className="container">
            <Collection key={currentRecipe.id} header={currentRecipe.recipeName}>
                <CollectionItem><img src={currentRecipe.imageUrlsBySize[90]} /></CollectionItem>
                <CollectionItem>{updatedIngredients}</CollectionItem>
                <CollectionItem>{currentRecipe.rating} stars</CollectionItem>
                <CollectionItem>Source: {currentRecipe.sourceDisplayName}</CollectionItem>
            </Collection>
        </div>
        :
        <div className="container">
            <p>Loading!</p>
        </div>
    )
};

export default ShowPage;