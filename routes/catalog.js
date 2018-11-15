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
        var item = Console.getItem(req.params.item_id);
        console.log(item);
        res.locals.message = req.flash('error');
        res.locals.item = item;
        if (item.itemType == 'Music') res.render('modifyMusic');
        if (item.itemType == 'Video') res.render('modifyVideo');
        if (item.itemType == 'Magezine') res.render('modifyMusic');
        if (item.itemType == 'Book') res.render('modifyBook');
        if (item.itemType == 'Movie') res.render('modifyMovie');
    }
);
router.post('/panel/catalog/modify/Book/:item_id',
   function(req,res){
    res.locals.message = req.flash('error');
    res.render('modifyBook');
   }
)


module.exports = router;
