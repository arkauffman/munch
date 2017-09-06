var Recipe = require('../models/recipe');
var User = require('../models/user');

function toggleRecipe(req, res) {
    User.findById(req.user._id, function(err, user) {
        Recipe.findOne({recipeId: req.body.recipeId}, function(err, recipe) {
            if (recipe) {
                // check if user already has recipe
                console.log('recipe already there');
                var idx = user.recipes.findIndex(id => id.equals(recipe._id));
                if (idx > -1) {
                    user.recipes.splice(idx, 1);
                    user.save(function(err) {
                        User.populate(user, 'recipes', function(err, user) {
                            console.log('user removing recipe', user);
                            res.json(user);
                        });
                    });
                } else {
                    user.recipes.push(recipe._id);
                    user.save(function(err) {
                        User.populate(user, 'recipes', function(err, user) {
                            console.log('adding recipe to user', user);
                            res.json(user);
                        });
                    });
                }   
            } else {
                // create the recipe
                console.log('recipe NOT there')
                var recipe = new Recipe(req.body);
                console.log('body', req.body);
                recipe.save().then(recipe => {
                    user.recipes.push(recipe._id);
                    user.save(function(err) {
                        User.populate(user, 'recipes', function(err, user) {
                            console.log(user);
                            res.json(user);
                        });
                    });               
                }).catch(err => res.status(400).json(err));
            }
        });
    });
}

function getUser(req, res) {
    console.log('poop', req.user)
    User.findById(req.user._id, function(err, user) {
        User.populate(user, 'recipes', function(err, user) {
            res.json(user);
        })
    })
}

module.exports = {
    toggleRecipe,
    getUser
};