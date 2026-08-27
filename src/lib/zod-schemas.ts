import { z } from 'zod';

export const ContactEnquirySchema = z.object({
  type: z.string().min(2, 'Inquiry type is required'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid business email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  serviceType: z.string().optional(),
  linkedinUrl: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

export const JobApplicationSchema = z.object({
  type: z.literal('Job Application'),
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email address is required'),
  phone: z.string().min(6, 'Contact phone number is required'),
  jobSlug: z.string().min(1, 'Job position selection is invalid'),
  jobTitle: z.string().min(1, 'Job title is required'),
  message: z.string().optional(),
  resumeUrl: z.string().url('Invalid resume link URL').or(z.string().min(5, 'Provide a valid portfolio or resume link')),
});

export const JobFormSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  department: z.string().min(2, 'Department is required'),
  location: z.string().min(2, 'Location is required'),
  type: z.enum(['Full-time', 'Contract', 'Executive', 'Remote']),
  experience: z.string().min(1, 'Experience requirement is required'),
  salaryRange: z.string().optional(),
  summary: z.string().min(20, 'Summary must be at least 20 characters'),
  responsibilities: z.array(z.string()).min(1, 'At least one responsibility is required'),
  requirements: z.array(z.string()).min(1, 'At least one requirement is required'),
  benefits: z.array(z.string()).optional(),
  status: z.enum(['Active', 'Archived', 'Draft']),
});

export const BlogFormSchema = z.object({
  title: z.string().min(5, 'Article title is required'),
  category: z.string().min(2, 'Category is required'),
  readTime: z.string().default('5 min read'),
  authorName: z.string().min(2, 'Author name is required'),
  authorRole: z.string().min(2, 'Author role is required'),
  summary: z.string().min(15, 'Summary is required'),
  content: z.string().min(50, 'Article content is required'),
  coverImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(['Published', 'Draft']),
});

export const AdminLoginSchema = z.object({
  email: z.string().email('Valid admin email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
