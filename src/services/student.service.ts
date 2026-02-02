import { StudentRepository } from '../repositories/student.repository';
import { IStudent } from '../models/student.model';

export class StudentService {
  private studentRepository: StudentRepository;

  constructor() {
    this.studentRepository = new StudentRepository();
  }

  // Create a new student
  async createStudent(data: Partial<IStudent>): Promise<IStudent> {
    // Add any complex validation here if needed
    return await this.studentRepository.create(data);
  }

  // Get all students with search, filter, and pagination
  async getAllStudents(query: any) {
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const filter: any = {};
    
    // Search by name (regex)
    if (query.search) {
      filter.name = { $regex: query.search, $options: 'i' };
    }
    
    // Filter by department
    if (query.department) {
      filter.department = query.department;
    }

    // Sorting
    const sort: any = {};
    if (query.sortBy) {
        sort[query.sortBy as string] = query.order === 'desc' ? -1 : 1;
    } else {
        sort.createdAt = -1; // Default sort by newest
    }

    const students = await this.studentRepository.findAll(filter, sort, skip, limit);
    const total = await this.studentRepository.count(filter);

    return {
      students,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      limit
    };
  }

  // Get single student by ID
  async getStudentById(id: string): Promise<IStudent | null> {
    return await this.studentRepository.findById(id);
  }

  // Update student
  async updateStudent(id: string, data: Partial<IStudent>): Promise<IStudent | null> {
    return await this.studentRepository.update(id, data);
  }

  // Delete student
  async deleteStudent(id: string): Promise<IStudent | null> {
    return await this.studentRepository.delete(id);
  }
}
