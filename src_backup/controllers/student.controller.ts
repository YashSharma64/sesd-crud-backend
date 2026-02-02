import { Request, Response, NextFunction } from "express";
import { StudentService } from "../services/student.service";

export class StudentController {
  private studentService: StudentService;

  constructor() {
    this.studentService = new StudentService();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const student = await this.studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const student = await this.studentService.getStudentById(req.params.id as string);
      res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = req.query.search as string;
      const sortBy = (req.query.sortBy as string) || "createdAt";
      const order = (req.query.order as "asc" | "desc") || "desc";
      const department = req.query.department as string;

      const result = await this.studentService.getAllStudents(
        page,
        limit,
        search,
        sortBy,
        order,
        department
      );
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const student = await this.studentService.updateStudent(
        req.params.id as string,
        req.body
      );
      res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const student = await this.studentService.deleteStudent(req.params.id as string);
      res
        .status(200)
        .json({ message: "Student deleted successfully", student });
    } catch (error) {
      next(error);
    }
  };
}
