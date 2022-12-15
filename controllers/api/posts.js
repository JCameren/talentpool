const Post = require('../../models/post')

const index = async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
}

const create = async (req, res) => {
    req.body.employer = req.user._id
    const post = await Post.create(req.body)
    res.json(post)
}

module.exports = {
    create,
    index
}