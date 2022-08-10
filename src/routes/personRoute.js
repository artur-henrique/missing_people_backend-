const { Router } = require('express');
const router = Router();

const PersonController = require('../controllers/PersonController');

router.get('/', PersonController.get);
router.get('/', PersonController.getByName);

module.exports = router;