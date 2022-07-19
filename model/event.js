var mongoose = require ('mongoose');

var  Schema = mongoose.Schema;

var Event = new Schema(

    {


        name : String,
        description : String,
        date_debut : Date,
        date_fin : Date,
        place : String,
            participant : String,
            cost_event : Number,
    //    client_id: {type: mongoose.Schema.Types.ObjectId, ref: 'clients', default: "62bf9af180ef98715c71ae20", require: true}

    });



module.exports = mongoose.model('evenement', Event);
