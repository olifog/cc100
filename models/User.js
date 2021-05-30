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
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
