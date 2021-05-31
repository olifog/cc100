import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  taskNumber: {
    type: Number,
    required: true
  },
  taskName: {
    type: String,
    required: true
  },
  taskCategory: {
    type: String,
    required: true
  }
})

export default mongoose.models.Task || mongoose.model('Task', TaskSchema)
