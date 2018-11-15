var express = require('express');
var router = express.Router();
var helper = require('../helperFunctions/checkAuthentication');

var Console = require('../controller/console');

// Get all items in catalog
router.get('/panel/catalog',
    function(req, res) {
    }
);

// Add item
router.post('/panel/catalog/',
    helper.checkIfUserIsAdmin,
    function(req, res) {
    }
);

// Delete item with id: item_id
router.delete('/panel/catalog/:item_id',
    helper.checkIfUserIsAdmin,
    function(req, res) {
    }
);

// Modify item with id: item_id
router.put('/panel/catalog/:item_id',
    helper.checkIfUserIsAdmin,
    function(req, res) {
    }
);

module.exports = router;