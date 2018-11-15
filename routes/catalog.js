var express = require('express');
var router = express.Router();

var Console = require('../controller/console');

// Get all items in catalog
router.get('/panel/catalog',
    function(req, res) {
        let items = Console.allItems()
        res.locals.items = items;
        res.render('catalog');
    }
);

// Add item
router.get('/panel/catalog/add',
    function(req, res) {
            res.locals.message = req.flash('error');
            res.render('add'); 
    }
);
router.get('/panel/catalog/add/book',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('addBook');   
   }
);
router.post('/panel/catalog/add/book',
    function(req,res){
        Console.addItem(req.body);
        res.redirect('/panel/catalog');
    })
router.get('/panel/catalog/add/Music',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('addMusic');   
   }
)
router.post('/panel/catalog/add/Music',
    function(req,res){
        Console.addItem(req.body);
        res.redirect('/panel/catalog');
    })
router.get('/panel/catalog/add/Magazine',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('addMagazine');   
   }
)
router.post('/panel/catalog/add/Magazine',
    function(req,res){
        Console.addItem(req.body);
        res.redirect('/panel/catalog');
    })
router.get('/panel/catalog/add/Movie',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('addMovie');   
   }
)
router.post('/panel/catalog/add/Movie',
    function(req,res){
        Console.addItem(req.body);
        res.redirect('/panel/catalog');
    })

// Delete item with id: item_id
router.delete('/panel/catalog/:item_id',
    function(req, res) {
    }
);

// Modify item with id: item_id
router.put('/panel/catalog/:item_id',
    function(req, res) {
    }
);

module.exports = router;