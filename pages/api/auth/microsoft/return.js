import nextConnect from 'next-connect'

import auth from '../../../../middleware/auth'
import passport from '../../../../lib/passport'

const handler = nextConnect()

handler.use(auth).get(passport.authenticate('microsoft', { scope: ['user.read'] }), async (req, res) => {
  res.statusCode = 302
  res.setHeader('Location', '/')
  res.end()
})

export default handler
