var express = require('express');
var router = express.Router();


//const Client = require('../model/client');
//const ClientService = require('../services/client.service');
const {Router} = require("express");
const Event = require("../model/event");
const EventService = require("../services/event.service");

//Router

router.delete('/:id', _delete);
//router.put('/:id', update);

/* GET users listing. */
router.get('/', function(req, res, next) {

    Event.find(function (err, data)

    {
        if (err) throw err;
        res.json(data);

    })

});




router.get('/:id', function(req, res, next) {


    Event.findById({_id : req.params.id},function (err, data)

    {
        if (err) throw err;
        res.json(data);

            })

});

function _delete(req, res, next) {
    EventService.delete(req.params.id)
        .then(() => res.json({message:"Event deleted !!"}))
        .catch(err => next(err));
}


router.post('/addformevent',async function (req, res) {
    const p = new Event({

        name : req.body.name,
        description: req.body.description,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
        place: req.body.place,
        participant : req.body.participant,
        cost_event : req.body.cost_event
    });

   await p.save();
    return res.status(200).send({
        message: 'Registration successfull',
        data:{}    });

});

/* *************************************************

router.patch('/:id',(req,res , next )=>{

    const newEvent = {
        name : req.body.name,
        description: req.body.description,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
        place: req.body.place,
        participant : req.body.participant,
        cost_event : req.body.cost_event
    }
    Event.update({_id : req.params.id} , {$set : newEvent}).
    then(doc=> {
        res.status(200).json({
            message: 'Thing updated successfully!'
                //   massage :doc
        })
    }).
    catch(err=>{
        res.status(404).json({
            massage: err
        })
    })
})


 ************************************************* */


router.patch('/:id',(req,res , next )=>{

    const newe = {
        name : req.body.name,
        description: req.body.description,
        date_debut: req.body.date_debut,
        date_fin: req.body.date_fin,
        place: req.body.place,
        participant : req.body.participant,
        cost_event : req.body.cost_event
    }
    Event.update({_id : req.params.id} , {$set : newe}).
    then(doc=> {
        res.status(200).json({
            massage :'Updated'
        })
    }).
    catch(err=>{
        res.status(404).json({
            massage: err
        })
    })
})


/* ************************************************* */

async function getEvent (req, res, next) {
    let Eve
    try {
        Eve = await Eve.findById(req.params.id)
        if (Eve == null) {
            return res.status(404).json({message: 'Cannot find Event'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.Eve = Eve
    next()
}
/*
router.patch('/upcoming',function (req,res){
    let ts = Date.now();
    let date_ob = new Date(ts);
    let month = date_ob.getMonth() + 1;
    Event.find({
        "$where": function() {
            return this.date_debut.getMonth() === month
        }
    }).count(function (err, data) {
        // Handle err
    });
})*/



module.exports = router;
