import Student, { IStudent } from '../models/student.model';

export class StudentRepository {
  // Create a new student
  async create(data: Partial<IStudent>): Promise<IStudent> {
    return await Student.create(data);
  }

  // Find all students with pagination, sorting, and filtering
  async findAll(
    filter: any = {}, 
    sort: any = { createdAt: -1 }, 
    skip: number = 0, 
    limit: number = 10
  ): Promise<IStudent[]> {
    return await Student.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  // Count documents for pagination metadata
  async count(filter: any = {}): Promise<number> {
    return await Student.countDocuments(filter);
  }

  // Find a student by ID
  async findById(id: string): Promise<IStudent | null> {
    return await Student.findById(id);
  }

  // Update a student by ID
  async update(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
    return await Student.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete a student by ID
  async delete(id: string): Promise<IStudent | null> {
    return await Student.findByIdAndDelete(id);
  }
}
