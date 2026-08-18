import mongoose, { Schema, Document, Model } from 'mongoose'

export interface ILead extends Document {
  name: string
  email: string
  service?: string
  budget?: string
  message: string
  status: 'new' | 'contacted' | 'in_progress' | 'closed'
  notes?: string
  ip?: string
  createdAt: Date
  updatedAt: Date
}

const LeadSchema: Schema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: { type: String, required: [true, 'Email is required'], trim: true, lowercase: true },
    service: { type: String, default: 'General Inquiry' },
    budget: { type: String, default: 'Not specified' },
    message: { type: String, required: [true, 'Message is required'] },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in_progress', 'closed'],
      default: 'new',
    },
    notes: { type: String, default: '' },
    ip: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
)

export const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema)
