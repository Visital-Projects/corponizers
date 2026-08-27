import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  summary: string;
  content: string;
  coverImage?: string;
  tags: string[];
  status: 'Published' | 'Draft';
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    readTime: { type: String, required: true, default: '5 min read' },
    author: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String },
    },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String },
    tags: [{ type: String }],
    status: { 
      type: String, 
      enum: ['Published', 'Draft'], 
      default: 'Published',
      index: true 
    },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const BlogModel: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
