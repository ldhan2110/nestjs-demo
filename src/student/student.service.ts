import { Injectable } from '@nestjs/common';

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

  addStudent({
    studentName,
    className,
  }: {
    studentName: string;
    className: string;
  }) {
    this.student.push({
      studentName,
      className,
    });
    return 'Add Sucess';
  }
}
