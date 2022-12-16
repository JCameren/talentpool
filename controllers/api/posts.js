const Post = require('../../models/post')

const index = async (req, res) => {
    //populate adds fields to be seen for referencing ids, exec() executes the method
    const posts = await Post.find({}).populate('employer').exec()
    res.json(posts)
}

const create = async (req, res) => {
    req.body.employer = req.user._id
    const post = await Post.create(req.body)
    res.json(post)
}

const show = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.json(post)
}

const getPostsApplied = async (req, res) => {
    console.log(req.user._id)
    const posts = await Post.find({applicants: req.user._id})
    // if (!posts) res.json(null)
    res.json(posts)
    // console.log(posts)
}

module.exports = {
    create,
    index,
    show,
    getPostsApplied
}