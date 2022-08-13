const { Router } = require('express');
const router = Router();

const PersonController = require('../controllers/PersonController');

router.get('/', PersonController.index);
router.get('/:name', PersonController.show);
router.post('/', PersonController.store);
router.delete('/', PersonController.delete);

module.exports = router;