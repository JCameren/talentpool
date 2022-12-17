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
    const posts = await Post.find({applicants: req.user._id})
    res.json(posts)
}

const appliedToJobPost = async (req, res, next) => {
    req.body.applicants = req.user._id
    const post = await Post.findByIdAndUpdate({_id: req.params.id, }, req.body).populate('employer').exec()
    res.json(post)
}

const getJobsListed = async (req, res) => {
    const jobsPosted = await Post.find({employer: req.user._id}).populate('applicants').exec()
    res.json(jobsPosted)
}

const deleteJobListing = async (req, res) => {
    const deletedJobListing = await Post.findByIdAndDelete({_id: req.params.id})
    res.json(deletedJobListing)
}

module.exports = {
    create,
    index,
    show,
    getPostsApplied,
    appliedToJobPost,
    getJobsListed,
    deleteJobListing
}