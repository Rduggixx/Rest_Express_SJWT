// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using models.exports
module.exports = mongoose.model('Utente', new Schema({
    name: String,
    password: String,
<<<<<<< HEAD
    email : String,
=======
>>>>>>> 5ecec663ac77d49e8430628d8ad5406948d82b38
    admin: Boolean,
    box:{nome:String,colore:String,img:String},
    auto:[Schema.Types.ObjectId]
}, { collection: 'Utente' }));