import { Body, Controller, Get, Post, Scope } from '@nestjs/common';
import { StudentService } from './student.service';
import { ConfigService } from '@nestjs/config';

@Controller({
  path: 'student',
  scope: Scope.REQUEST,
})
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getAllStudent(): any[] {
    return this.studentService.getAllStudent();
  }

  @Post('add')
  addStudent(@Body() student: { studentName: string; className: string }) {
    return this.studentService.addStudent(student);
  }
};

