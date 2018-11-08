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
router.post('/panel/catalog/',
    function(req, res) {
    }
);

// Delete item with id: item_id
router.post('/panel/catalog/delete/:item_id',
    function(req, res) {
        id = req.params.item_id;
        Console.removeItem(id);
        res.redirect('/panel/catalog');
    }
);

// Modify item with id: item_id
router.post('/panel/catalog/modify/:item_id',
    function(req, res) {
    }
);

module.exports = router;