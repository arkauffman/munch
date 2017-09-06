var Recipe = require('../models/recipe');
var User = require('../models/user');

function addRecipe(req, res) {
    User.findById(req.user._id, (err, user) => {
    Recipe.find({}, (err, recipe) => {
        var isRecipe = false;
        var isRecipePresentInUser = false;        

        console.log('YSSAAA', user);

        recipe.filter(name => {
            if (name.recipeName === req.body.recipeName) {
                isRecipe = true;
            }
        });
        
        if (!isRecipe) {
            console.log('YAS BITCH')
            var recipe = new Recipe();
            console.log('body', req.body);
            recipe.recipeName = req.body.recipeName;
            recipe.recipeIngredients = req.body.recipeIngredients;
            recipe.save().then(recipe => {
                res.json(recipe);

            User.populate(req.user, 'recipes', (err, user) => {
                user.recipes.push(recipe);
                user.save(err => {
                    if (err) {
                        res.json(err);
                    } else {
                        // User.populate(req.user, 'recipes', (err) => {
                        //     console.log(user);
                        // })
                        console.log('nah')
                    }
                    // console.log(user.recipes);
                })
            })
                // user.recipes.push(recipe);
                // user.save(err => {
                //     if (err) {
                //         res.json(err);
                //     } else {
                //         User.populate(req.user, 'recipes', (err) => {
                //             console.log(user);
                //         })
                //     }
                //     // console.log(user.recipes);
                // })

            }).catch(err => res.status(400).json(err));
            isRecipe = false;

            // user.recipes.push(recipe);
            // user.save(err => {
            //     if (err) {
            //         res.json(err)
            //     } else {
            //         // User.populate(user, 'recipes', (err, user) => {
            //         //     if (err) res.json(err);
            //         //     // res.json(user);
            //         // })
            //         console.log('events', user.recipes)
            //     }
            // })

            // User.populate(req.user, 'recipes', (err, user) => {
            //     if (err) res.json(err);
                
            //     // user.recipes.filter(recipe => {
            //     //     console.log('recipe', recipe);
            //     // });

            //     user.recipes.push(recipe);
            //     user.save(err => {
            //         if (err) res.json(err);
            //          console.log(user)
            //     })
                
            //     // console.log(user);
            // })
            
            console.log('USER', req.user)


        } else {
            console.log('nope, motherfucker');
        }

    })
    

        // check if recipe is already in the recipe modl
            // if it is, do not add recipe to recipe model
                // if recipe id is already in array, remove it
                // else, push recipe id into user array
        // else create new recipe in model
            // if recipe id is already in array, remove it
            // else add it
            
    })
}

module.exports = {
    addRecipe
};