import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IReach extends Document {
  ip: string
  city?: string
  region?: string
  country?: string
  countryCode?: string
  lat?: number
  lon?: number
  exactLat?: number
  exactLon?: number
  accuracy?: number
  address?: string
  suburb?: string
  postcode?: string
  isPrecise?: boolean
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
    exactLat: { type: Number },
    exactLon: { type: Number },
    accuracy: { type: Number },
    address: { type: String, default: '' },
    suburb: { type: String, default: '' },
    postcode: { type: String, default: '' },
    isPrecise: { type: Boolean, default: false },
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
