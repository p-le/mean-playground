const express = require('express');
const router = express.Router();

const locationsController = require('../controllers/locations');
const othersController = require('../controllers/others')

router.get('/', locationsController.homeList);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

router.get('/about', othersController.about)

module.exports = router;