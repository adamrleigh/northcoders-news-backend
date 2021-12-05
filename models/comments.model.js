const db = require('../db/connection');

exports.updateComment = async (req) => {
    await this.selectCommentById(req);
    const { rows } = await db.query(`
    UPDATE comments
    SET votes = votes ${req.body.inc_votes > 0 ? '+' : '- '} $1
    WHERE comment_id = $2
    RETURNING *
    ;`,
        [req.body.inc_votes ? Math.abs(req.body.inc_votes) : 0, req.params.comment_id]
    );
    return rows[0]
}

exports.selectCommentById = async (req) => {
    const { rows: comments } = await db.query(`
    SELECT * FROM comments
    WHERE comment_id = $1
    ;`,
        [req.params.comment_id]
    );
    if (!comments[0]) throw { status: 404, message: 'error' }
    return comments[0];
}

exports.removeComment = async (req) => {
    await this.selectCommentById(req);
    db.query(`
    DELETE FROM comments WHERE comment_id = $1;`,
        [req.params.comment_id]
    );
}
