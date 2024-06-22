const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../Models/userModel');
const { comparePassword } = require('../utils/bcrypt');

passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username });
            if (!user) {
                return done(null, false, { message: 'User not found' });
            }
            const isMatch = await comparePassword(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Password is incorrect' });
            }
            return done(null, user);
        } catch (error) {
            console.log('inside error passport local strategy');
            return done(error);
        }
    })
);

passport.serializeUser((user, done) => {
    console.log('inside serialize user');
        console.log(user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        console.log('inside deserialize user');
        console.log(user);
        return done(null, user);
    } catch (error) {
        return done(error);
    }
});

module.exports = passport;  