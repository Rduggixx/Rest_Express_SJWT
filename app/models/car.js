// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var properties = new Schema({
    "nome":String,
        "valore":String
});

// set up a mongoose model and pass it using models.exports
module.exports = mongoose.model('automobile', new Schema({
    nome:String,
    marca:{type:String,enum:["fiat","lancia","alfaromeo","volkswagen","audi","bmw"]},
    modello:String,
    allestimento:String,
    tipologia:{type:String,enum:["nuovo","usato","km0"]},
    parti:[Schema.Types.ObjectId],
    prop:[properties]
}, { collection: 'automobile' }));

