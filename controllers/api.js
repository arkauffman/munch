var request = require('request');
const URL = `http://api.yummly.com/v1/api/recipes?_app_id=${process.env.X_Yummly_App_ID}&_app_key=${process.env.X_Yummly_App_Key}&q=`

function getRecipes(req, res) {
    request(URL, (err, response, body) => {
        if (err) return console.log(err);
        // console.log('body ', body)
        let recipes = body;
        res.send(recipes);
    });
    
    // if (req.params.keyword === "") {
    //     request(`${URL}${req.params.keyword}`, (err, response, body) => {
    //         if (err) return console.log(err);
    //         console.log('body ', body)
    //         let recipes = body;
    //         res.send(recipes);
    //     });
    // } 
    
    // else {
    //     console.log('hitting w KEYWORD!!!');
    //     request(URL + req.params.keyword, (err, response, body) => {
    //         if (err) return console.log(err);
    //         console.log('body ', body)
    //         let recipes = body;
    //         res.send(recipes);
    //     });

    // }
    // request(URL, (err, response, body) => {
    //     if (err) return console.log(err);
    //     console.log('body ', body)
    //     let recipes = body;
    //     res.send(recipes);
    // });
}

module.exports = {
    getRecipes
}