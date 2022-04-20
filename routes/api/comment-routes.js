
const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');
// create comments through the pizza id
// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// delete comments through the pizza id
// add replies through the comment id
// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// delete replies through the reply id
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);


module.exports = router;