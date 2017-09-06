var mongoose = require('mongoose');

var recipeIngredientsSchema = new mongoose.Schema({
    recipeId: String,
    recipeName: String,
    recipeIngredients: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeIngredientsSchema);