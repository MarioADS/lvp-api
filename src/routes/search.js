const router = require('express').Router();
const searchController = require('../controllers/search');

router.get('/search', searchController.searchProducts );
router.get('/suggestions', searchController.autocomplete )

module.exports = router;