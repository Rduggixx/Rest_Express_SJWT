// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Dimension = new Schema({
    "altezza":String,
    "larghezza":String,
    "lunghezza":String,
    "codiceMisura":String
});

// set up a mongoose model and pass it using models.exports
module.exports = mongoose.model('parti', new Schema({
    nome:String,
    valore:String,
    dimensioni:Dimension
}, { collection: 'parti' }));

