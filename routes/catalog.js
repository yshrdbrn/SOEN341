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
)
router.get('/panel/catalog/add/Music',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('addMusic');
   }
)
router.get('/panel/catalog/add/Magazine',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('addMagazine');
   }
)
router.get('/panel/catalog/add/Movie',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('addMovie');
   }
)

// Delete item with id: item_id
router.post('/panel/catalog/delete/:item_id',
    function(req, res) {
        id = req.params.item_id;
        Console.removeItem(id);
        res.redirect('/panel/catalog');
    }
);

// Modify item with id: item_id
router.get('/panel/catalog/modify/:item_id',
    function(req, res) {

    }
);

router.post('/panel/catalog/modify/:item_id',
    function(req, res) {
        Console.modifyItem(req.params.item_id, req.body);
        res.redirect('/panel/catalog');
    }
);

module.exports = router;
