var express = require('express');
var router = express.Router();
var Recipe = require('../../models/recipe');
var recipesCtrl = require('../../controllers/recipes');

router.post('/like/:food_id', recipesCtrl.addRecipe);

module.exports = router;