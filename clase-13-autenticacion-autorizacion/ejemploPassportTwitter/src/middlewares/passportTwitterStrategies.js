import { Strategy as TwitterStrategy } from 'passport-twitter'

const TWITTER_CONSUMER_KEY = 'Rrwmzd30UzqKM4c2oFYU9s6HM';
const TWITTER_CONSUMER_SECRET = 'hQxAMHPafw5ApDmUYL3nW9IpTlzNFYxwUJt6VirVjRsC5wHOXT';

export const loginTwitter = new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, userProfile, done) => {
    const userData = {
        id: userProfile.id,
        username: userProfile.username,
        displayName: userProfile.displayName,
        photos: userProfile.photos,
    }
    return done(null, userData);
})

