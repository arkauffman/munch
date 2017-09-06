var mongoose = require('mongoose');

var recipeIngredientsSchema = new mongoose.Schema({
    recipeName: String,
    recipeIngredients: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeIngredientsSchema);