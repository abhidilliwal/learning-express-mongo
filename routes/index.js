var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

router.get('/', function(req, res, next) {
    var query = Comment.find()
    query.exec(function (err, commentList) {
        res.render('index', { title: 'Comments', commentList: commentList, showSaveMessage: !!req.query.saved });
    });

});

router.post('/', function (req, res, next) {
    // console.log(req.body);
    // console.log(req.params);
    // console.log(req.query);
    var newCommentSubmission = {
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments
    };


    var newComment = new Comment(newCommentSubmission);
    newComment.save(function(error) {
      if (error) {
        res.render('index', { draftComment: newCommentSubmission, errorMsg: error.toString() });
      } else {
        res.redirect('/?saved=1');
      }
    });
});

module.exports = router;
