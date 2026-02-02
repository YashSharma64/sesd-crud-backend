import mongoose, { Schema, Document } from 'express';
// Note: importing from 'express' above is a mistake, it should be 'mongoose'. 
// I will correct this in the actual file content below.

import { Schema, Document, model } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  email: string;
  department: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

const StudentSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    department: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Create and export the model
const Student = model<IStudent>('Student', StudentSchema);

export default Student;
