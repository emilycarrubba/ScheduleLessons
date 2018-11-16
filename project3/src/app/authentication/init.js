const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const user = {
  username: 'test-user',
  passwordHash: 'bcrypt-hashed-password',
  id: 1
}


// Once the findUser returns with our user object the only thing left is to compare the user's 
// hashed password and the real password to see if there is a match. Always store passwords hashed 
// and use fixed time comparison to avoid timing attacks.
passport.use(new LocalStrategy(
 (username, password, done) => {
    findUser(username, (err, user) => {
      if (err) {
        return done(err)
      }

      // User not found
      if (!user) {
        return done(null, false)
      }

      // Always use hashed passwords and fixed time comparison
      bcrypt.compare(password, user.passwordHash, (err, isValid) => {
        if (err) {
          return done(err)
        }
        if (!isValid) {
          return done(null, false)
        }
        return done(null, user)
      })
    })
  }
))