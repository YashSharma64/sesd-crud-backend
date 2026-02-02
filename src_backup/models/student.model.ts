import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  rollNo: string;
  department?: string;
  year?: number;
  createdAt: Date;
  updatedAt: Date;
}

const StudentSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    rollNo: { type: String, required: true, unique: true },
    department: { type: String },
    year: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model<IStudent>("Student", StudentSchema);
