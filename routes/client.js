var express = require('express');
var router = express.Router();


const {Router} = require("express");
const Client = require('../model/client');
const ClientService = require('../services/client.service');
//const Event = require("../model/event");
//const EventService = require("../services/event.service");

router.delete('/:id', __delete);

function __delete(req, res, next) {
    ClientService.delete(req.params.id)
        .then(() => res.json({message:"Client deleted !!"}))
        .catch(err => next(err));
}

/* GET users listing. */
router.get('/', function (req, res, next) {

    Client.find(function (err, data)

    {
        if (err) throw  err;
        res.json(data);
    })

});

/* ****************************************** */

router.get('/:id', function(req, res, next) {

    Client.findById({_id : req.params.id},function (err, data)
    {
        if (err) throw err;
        res.json(data);
    })
});

/* ******************************************

router.post('/add',(req,res, next)=>{
    const client = new Client ({
        name: req.body.name,
        price : req.body.price
    })

    client.save().
    then(doc=>{
        res.status(200).json({
            massage:'added product'
        })
    }).
    catch(err=>{
        res.status(404).json({
            massage: err
        })
    })
})
*/



router.patch('/:id',(req,res , next )=>{

    const newc = {
        adress: req.body.adress ,
        postal_code : req.body.postal_code
    }
    Client.update({_id : req.params.id} , {$set : newc}).
    then(doc=> {
        res.status(200).json({
            massage :'Clients Updated'
        })
    }).
    catch(err=>{
        res.status(404).json({
            massage: err
        })
    })
})


/* ****************************************** */



router.post('/addClient',async function (req, res) {
    const p = new Client({

        adress: req.body.adress,
        postal_code: req.body.postal_code


    });

    await p.save();
    return res.status(200).send({
        message: 'Client Added successfully',
        data:{}    });

});



/*
router.post('/addc',async function (req, res) {
    const p = new Client({



        adress: req.body.adress,
        postal_code: req.body.postal_code
    });

    await p.save();
    return res.status(200).send({
        message: 'Registration successfull',
        data:{}    });

});*/



router.get('/:id', function(req, res, next) {


    Client.findById({_id : req.params.id},function (err, data)

    {
        if (err) throw err;
        res.json(data);

    })

});

module.exports = router;