import mongoose from 'mongoose'

const SubmissionSchema = new mongoose.Schema({
  taskNumber: {
    type: Number,
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  approved: {
    type: Boolean,
    required: true
  },
  comments: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
})

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema)
