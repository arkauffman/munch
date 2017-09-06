var express = require('express');
var router = express.Router();
var Recipe = require('../../models/recipe');
var recipesCtrl = require('../../controllers/recipes');

router.get('/user', recipesCtrl.getUser);
router.post('/like/:food_id', recipesCtrl.toggleRecipe);

module.exports = router;