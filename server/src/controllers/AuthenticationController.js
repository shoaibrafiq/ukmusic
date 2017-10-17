const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUSer (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
  	try {
  	 const user = await User.create(req.body)
  	 res.send(user.toJSON())
    } catch (err) {
    	res.status(400).send({
    		error:'Email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
     const {email, password} = req.body
     const user = await User.findOne({
       where: {
         email: email
       }
     })

     if (!user) {
      return res.status(403).send({
        error: 'Invalid Login details'
       })
     }

     const isPasswordValid = password === user.password
     if (!isPasswordValid) {
      return res.status(403).send({
        error: 'Invalid Login details'
      })
     }

     const userJson = user.toJSON()
     res.send({
       user: userJson,
       token: jwtSignUSer(userJson)
     })
    } catch (err) {
      res.status(500).send({
        error:'An Error has occured trying to login'
      })
    }
  }
}