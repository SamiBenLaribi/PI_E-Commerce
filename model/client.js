var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Cl = new Schema(
    {

        adress : String,
        postal_code : String
    });


module.exports = mongoose.model('clients', Cl);

