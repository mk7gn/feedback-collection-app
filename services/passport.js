
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await findUserById(id);
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const user = await findUserByOauthId(profile.id);

    if (user) {
      return done(null, user)
    }

    const newUser = await saveUser(profile)
    done(null, newUser);
  }
));

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: "/auth/facebook/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    const user = await findUserByOauthId(profile.id);

    if (user) {
      return done(null, user)
    }

    const newUser = await saveUser(profile)
    done(null, newUser);
  }
));

async function findUserById(id) {
  try {
    let user = await User.findById(id);
    return user;
  } catch(err) {
    return err;
  }
}

async function findUserByOauthId(userId) {
  try {
    let user = await User.findOne({oauthId: userId});
    return user;
  } catch(err) {
    return err;
  }
}

async function saveUser(data) {
  try {
    let newUser = await new User({
      oauthId: data.id,
      firstName: data.name.givenName,
      lastName: data.name.familyName
    }).save();
    return newUser;
  } catch(err) {
    return err;
  }
}
