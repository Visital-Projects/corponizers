import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEnquiry extends Document {
  type: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  serviceType?: string;
  linkedinUrl?: string;
  message?: string;
  jobSlug?: string;
  resumeUrl?: string;
  source?: string;
  status: 'New' | 'Reviewed' | 'Contacted' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    type: { 
      type: String, 
      required: true 
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    jobTitle: { type: String },
    serviceType: { type: String },
    linkedinUrl: { type: String },
    message: { type: String },
    jobSlug: { type: String },
    resumeUrl: { type: String },
    source: { type: String },
    status: { 
      type: String, 
      enum: ['New', 'Reviewed', 'Contacted', 'Archived'], 
      default: 'New',
      index: true
    },
  },
  { timestamps: true }
);

export const EnquiryModel: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
