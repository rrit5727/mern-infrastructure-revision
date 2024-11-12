const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = {
  create
}

async function create(req, res) {
  try {
    const user = await User.create(req.body)

    const token = createJWT(user);

    res.json(token);
  } catch (err) {
    console.error(err); // Log the error
    res.status(400).json(err)
  }
}

// Helper functions
function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}