import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IReach extends Document {
  ip: string
  city?: string
  region?: string
  country?: string
  countryCode?: string
  lat?: number
  lon?: number
  isp?: string
  userAgent?: string
  path?: string
  createdAt: Date
}

const ReachSchema: Schema = new Schema(
  {
    ip: { type: String, required: true },
    city: { type: String, default: 'Unknown' },
    region: { type: String, default: 'Unknown' },
    country: { type: String, default: 'Unknown' },
    countryCode: { type: String, default: 'UN' },
    lat: { type: Number, default: 0 },
    lon: { type: Number, default: 0 },
    isp: { type: String, default: 'Unknown Provider' },
    userAgent: { type: String, default: '' },
    path: { type: String, default: '/reach' },
  },
  {
    timestamps: true,
  }
)

export const Reach: Model<IReach> =
  mongoose.models.Reach || mongoose.model<IReach>('Reach', ReachSchema)
