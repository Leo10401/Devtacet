import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IProject extends Document {
  title: string
  image: string
  href?: string
  description?: string
  category?: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: [true, 'Project title is required'], trim: true },
    image: { type: String, required: [true, 'Project image URL is required'], trim: true },
    href: { type: String, default: '#' },
    description: { type: String, default: '' },
    category: { type: String, default: 'Web Development' },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema)
