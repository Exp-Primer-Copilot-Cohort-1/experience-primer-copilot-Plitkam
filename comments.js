// Create web server

// Require modules
const express = require('express');
const router = express.Router();

// Require controllers
const commentsCtrl = require('../controllers/comments');

// Require middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.get('/:id', auth, commentsCtrl.getComments);
router.post('/:id', auth, commentsCtrl.createComment);
router.put('/:id', auth, commentsCtrl.updateComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

// Export router
module.exports = router;