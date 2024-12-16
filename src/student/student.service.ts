import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/StudentDto';

type Student = {
  studentName: string;
  className: string;
};

@Injectable()
export class StudentService {
  private student: Student[] = [
    {
      studentName: 'An Le',
      className: 'JWAT-01',
    },
  ];

  getAllStudent() {
    return this.student;
  }

  addStudent(data: StudentDto) {
    this.student.push({
      studentName: data.getStudentName(),
      className: data.getClassName(),
    });
    return 'Add Sucess';
  }
}

