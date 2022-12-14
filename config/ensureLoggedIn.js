module.exports = function(req, res, next) {
    // use status code of 401 'unauthorized'
    if (!req.user) return res.status(401).json('Unauthorized.')
    next()
}