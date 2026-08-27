import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IJob extends Document {
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Executive' | 'Remote';
  experience: string;
  salaryRange?: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  status: 'Active' | 'Archived' | 'Draft';
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    department: { type: String, required: true, index: true },
    location: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['Full-time', 'Contract', 'Executive', 'Remote'], 
      default: 'Full-time' 
    },
    experience: { type: String, required: true },
    salaryRange: { type: String },
    summary: { type: String, required: true },
    responsibilities: [{ type: String }],
    requirements: [{ type: String }],
    benefits: [{ type: String }],
    status: { 
      type: String, 
      enum: ['Active', 'Archived', 'Draft'], 
      default: 'Active',
      index: true
    },
  },
  { timestamps: true }
);

export const JobModel: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema);
