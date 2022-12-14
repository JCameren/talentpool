const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  // // Baby step...
  // res.json({
  //   user: {
  //     name: req.body.name,
  //     email: req.body.email,
  //   },
  // });
  try {
    // Add user to db
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (err) {
    // 400 = bad request
    res.status(400).json(err)
  }
};

/*---Helper Functions----*/
function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

const login = async (req, res) => {
  try {
    const user = await User.findOne({"email": req.body.email})
    if(!user) throw new Error('User not found.')
    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) throw new Error('Password is incorrect.')
    const token = createJWT(user)
    res.json(token)
  } catch (err) {
    res.status(400).json(err)
  }
}

const checkToken = (req, res) => {
  // verify middle is doing its job
  console.log('req.user', req.user)
  res.json(req.exp)
}

module.exports = {
  create,
  login,
  checkToken
};
