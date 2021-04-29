import nextConnect from 'next-connect'
import passport from '../lib/passport'
import session from '../lib/session'

const auth = nextConnect()
  .use(
    session({
      name: 'sess',
      secret: process.env.COOKIES_SECRET,
      cookie: {
        maxAge: 60 * 60 * 24,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
      }
    })
  )
  .use(passport.initialize())
  .use(passport.session())

export default auth
