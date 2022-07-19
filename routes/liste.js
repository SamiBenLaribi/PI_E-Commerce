var express = require('express');
var router = express.Router();


var Projet = require('../model/event');

/* GET users listing.
router.get('/', function(req, res, next) {
    //res.send('Home');
    res.render("home.twig");
});
*/



/* Update d'un P*/
/*router.post('/putformevent', function (req, res, next)

{     Projet.findById({_id: req.body.id}, function (err, data)
{
    data.libelle = req.body.libelle,
        data.description = req.body.description,
        data.date_debut = req.body.date_debut,
        data.date_fin = req.body.date_fin,
        data.lieux = req.body.lieux,
        data.save();
})
    res.redirect('/event/');
});*/



router.get('/detail/:id', function(req, res, next) {


    Projet.findById({_id : req.params.id},function (err, data)

    {
       // if (err) throw err;

    })

});



router.get('/delete/:id', function(req, res, next) {


    Projet.findOneAndRemove({_id : req.params.id},function (err, data)

    {
        res.json(data);
     //   res.render("event.twig",{data});
    });

    //res.redirect('/home/');

});


module.exports = router;
