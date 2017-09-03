var request = require('request');
const URL = 'http://api.yummly.com/v1';

function getRecipes(req, res) {
    console.log('hitting!!!');
    let request = {
        url: `${URL}_app_id=${process.env.X-YUMMPY-APP-ID}&_app_key=${X-YUMMLY-APP-KEY}`
    }
    request(request.url, (err, response, body) => {
        if (err) return console.log(err);
        let recipes = JSON.parse(body);
        console.log('RECIPES!!!', recipes);
        res.send(recipes);
    });
  }

module.exports = {
    getRecipes
}