import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  @IsString()
  private studentName: string;

  @IsOptional()
  private className: string;

  getStudentName() {
    return this.studentName;
  }

  getClassName() {
    return this.className ?? 'ADMIN';
  }
}

