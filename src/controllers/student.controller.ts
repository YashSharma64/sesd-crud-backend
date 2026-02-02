import { Request, Response } from 'express';
import { StudentService } from '../services/student.service';

export class StudentController {
  private studentService: StudentService;

  constructor() {
    this.studentService = new StudentService();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const student = await this.studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error: any) {
      if (error.code === 11000) {
        res.status(400).json({ message: 'Student with this email already exists' });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  };

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.studentService.getAllStudents(req.query);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const student = await this.studentService.getStudentById(req.params.id as string);
      if (!student) {
        res.status(404).json({ message: 'Student not found' });
        return;
      }
      res.status(200).json(student);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const student = await this.studentService.updateStudent(req.params.id as string, req.body);
      if (!student) {
        res.status(404).json({ message: 'Student not found' });
        return;
      }
      res.status(200).json(student);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const student = await this.studentService.deleteStudent(req.params.id as string);
      if (!student) {
        res.status(404).json({ message: 'Student not found' });
        return;
      }
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}
