import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  microsoftid: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  },
  form: {
    type: String,
    required: false
  },
  tutor: {
    type: String,
    required: false
  },
  submissions: {
    type: [mongoose.Schema.Types.ObjectId],
    required: false
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
