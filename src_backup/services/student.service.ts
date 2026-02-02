import { StudentRepository } from "../repositories/student.repository";
import { IStudent } from "../models/student.model";

export class StudentService {
  private studentRepo: StudentRepository;

  constructor() {
    this.studentRepo = new StudentRepository();
  }

  async createStudent(data: Partial<IStudent>): Promise<IStudent> {
    if (!data.email || !data.name || !data.rollNo) {
      throw new Error("Required fields missing");
    }

    const existingStudent = await this.studentRepo.findByEmail(data.email);
    if (existingStudent) {
      throw new Error("Student with this email already exists");
    }

    return await this.studentRepo.create(data);
  }

  async getStudentById(id: string): Promise<IStudent> {
    const student = await this.studentRepo.findById(id);
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  }

  async getAllStudents(
    page: number,
    limit: number,
    search?: string,
    sortBy: string = "createdAt",
    order: "asc" | "desc" = "desc",
    department?: string
  ): Promise<{ data: IStudent[]; total: number }> {
    const query: any = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    if (department) {
      query.department = department;
    }

    const sortOptions: any = {};
    sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const students = await this.studentRepo.findAll(
      query,
      page,
      limit,
      sortOptions
    );

    const total = await this.studentRepo.count(query);

    return { data: students, total };
  }

  async updateStudent(
    id: string,
    data: Partial<IStudent>
  ): Promise<IStudent> {
    const updated = await this.studentRepo.update(id, data);
    if (!updated) {
      throw new Error("Student not found");
    }
    return updated;
  }

  async deleteStudent(id: string): Promise<IStudent> {
    const deleted = await this.studentRepo.delete(id);
    if (!deleted) {
      throw new Error("Student not found");
    }
    return deleted;
  }
}
