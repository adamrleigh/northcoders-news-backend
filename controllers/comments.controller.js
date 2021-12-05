const { updateComment, removeComment } = require('../models/comments.model');
const { patchThis, deleteThis } = require('./functions.controller');

exports.patchComment = (req, res, next) =>
    patchThis(req, res, next, updateComment, 'comment');

exports.deleteComment = (req, res, next) =>
    deleteThis(req, res, next, removeComment);