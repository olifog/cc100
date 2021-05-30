import passport from 'passport'
import { Strategy as MicrosoftStrategy } from 'passport-microsoft'

import User from '../models/User'
import dbConnect from './dbConnect'

const host = process.env.VERCEL_ENV === 'production'
  ? 'https://cc100-main.vercel.app'
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

const microsoftData = {
  clientID: process.env.MICROSOFT_CLIENT_ID,
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
  callbackURL: `${host}/api/auth/microsoft/return`,
  scope: ['user.read']
}

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  await dbConnect()
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(
  new MicrosoftStrategy(microsoftData, async (accessToken, refreshToken, profile, done) => {
    await dbConnect()

    const newUser = {
      microsoftid: profile.id,
      displayName: profile.displayName,
      email: profile._json.mail,
      accessToken: accessToken
    }

    User.findOneAndUpdate({ microsoftid: profile.id }, newUser, { new: true, upsert: true }, (err, user) => {
      if (err) throw err
      return done(null, user)
    })
  })
)

export default passport
