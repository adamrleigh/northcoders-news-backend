const { selectArticleById } = require('../models/articles.model');
const { selectCommentById } = require('../models/comments.model');
const { selectUserById } = require('../models/users.model');
const { selecTopicById } = require('../models/topics.model');

exports.validateQueries = async (req) => {
    if (req.query.limit && /\D/.test(req.query.limit)) return 'limit must be a number';
    if (req.query.p && /\D/.test(req.query.p)) return 'p must be a number';
    if (req.query.order && !['asc', 'desc'].includes(req.query.order)) return "order must be either 'asc' or 'desc'";
}
