var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;

db.once('open', () => {
    console.log(`Mongoose connected to ${db.name}`);
});

// mongoose.connection.once('error', (err) => {
//     console.log(`database error:\n${err}`)
// });

module.exports = mongoose;

