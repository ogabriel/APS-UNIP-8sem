const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../app/models');

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {
      User.findOne({ where: { email: email } }).then((data) => {
        if (!data) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!data.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, data);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, { id: user.id, email: user.email, name: user.name });
});

passport.deserializeUser(function (user, done) {
  done(null, { id: user.id, email: user.email, name: user.name });
});

module.exports = passport;
