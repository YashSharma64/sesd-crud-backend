import Student, { IStudent } from "../models/student.model";

export class StudentRepository {
  async findByEmail(email: string): Promise<IStudent | null> {
    return await Student.findOne({ email });
  }

  async create(data: Partial<IStudent>): Promise<IStudent> {
    const student = new Student(data);
    return await student.save();
  }

  async findById(id: string): Promise<IStudent | null> {
    return await Student.findById(id);
  }

  async findAll(query: any, page: number, limit: number, sort: any): Promise<IStudent[]> {
    return await Student.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);
  }

  async count(query: any): Promise<number> {
    return await Student.countDocuments(query);
  }

  async update(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
    return await Student.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IStudent | null> {
    return await Student.findByIdAndDelete(id);
  }
}
