const Joi = require('joi')

module.exports = {
	register (req, res, next) {
	  const schema = {
        email: Joi.string().email(),
        password: Joi.string().regex(
          new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
	  }

       const {error, value} = Joi.validate(req.body, schema)

       if (error) {
         switch (error.details[0].context.key) {
         	case 'email':
         	  res.status(400).send({
         	  	error: 'Must provide valid email address'
         	  })
              break
         	case 'password':
         	  res.status(400).send({
         	  	error: `The password failed to match the following rules:
                  <br>
                  1. It must contain ONLY the following characters: lower case, upper case and numerics.
                  <br>
                  2. It must be at least 8 characters long and not greater than 32 characters.
         	  	`
         	  })
              break
         	default:
         	  res.status(400).send({
         	  	error: 'Invalid registeration info'
         	  })

         }
       } else {
       	 next()
       }
	}
}