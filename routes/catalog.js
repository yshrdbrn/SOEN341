var express = require('express');
var router = express.Router();
var helper = require('../helperFunctions/checkAuthentication');

var Console = require('../controller/console');

// Get all items in catalog
router.get('/panel/catalog',
    function(req, res) {
        Console.allItems(function(items) {
            res.locals.items = items;
            res.render('catalog');
        })
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

router.post('/panel/catalog/add',
    function(req, res) {
        Console.addItem(req.body, function() {
            res.redirect('/panel/catalog');
        })
    }
);


// Delete item with id: item_id
<<<<<<< HEAD
router.post('/panel/catalog/delete/:item_id',
=======
router.delete('/panel/catalog/:item_id',
    helper.checkIfUserIsAdmin,
>>>>>>> db
    function(req, res) {
        id = req.params.item_id;
        Console.removeItem(id, function() {
            res.redirect('/panel/catalog');
        });
    }
);

// Modify item with id: item_id
<<<<<<< HEAD
router.get('/panel/catalog/modify/:item_id',
=======
router.put('/panel/catalog/:item_id',
    helper.checkIfUserIsAdmin,
>>>>>>> db
    function(req, res) {
        var item = Console.getItem(req.params.item_id, function() {
            res.locals.message = req.flash('error');
            res.locals.info = item;
            if (item.itemType == 'Music') res.render('modifyMusic');
            if (item.itemType == 'Video') res.render('modifyVideo');
            if (item.itemType == 'Magezine') res.render('modifyMusic');
            if (item.itemType == 'Book') res.render('modifyBook');
            if (item.itemType == 'Movie') res.render('modifyMovie');
        });
    }
);

router.post('/panel/catalog/modify/:item_id',
   function(req,res){
      Console.modifyItem(req.params.item_id, req.body, function() {
        res.redirect('/panel/catalog');
      });
   }
)


module.exports = router;
