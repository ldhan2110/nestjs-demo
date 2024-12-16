import {
  applyDecorators,
  Body,
  Controller,
  createParamDecorator,
  DefaultValuePipe,
  ExecutionContext,
  Get,
  Param,
  Post,
  Scope,
  SetMetadata,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { ConfigService } from '@nestjs/config';
import { StudentDto } from './dto/StudentDto';
import { plainToInstance } from 'class-transformer';
import { StudentGuard } from 'src/guards/student.guards';

import { Reflector } from '@nestjs/core';
import { StudentInterceptor } from 'src/interceptor/student.interceptor';
export const Roles = Reflector.createDecorator<string[]>();

export function Auth() {
  return applyDecorators(
    SetMetadata('users', { user: 'admin' }),
    Roles(['principals']),
  );
}

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);


@Controller({
  path: 'student',
  scope: Scope.REQUEST,
})
@UseInterceptors(StudentInterceptor)
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly configService: ConfigService,
  ) {}

  // @Get()
  // getAllStudent(): any[] {
  //   throw new HttpException('error', HttpStatus.AMBIGUOUS);
  //   //return this.studentService.getAllStudent();
  // }

  @Get()
  @Roles(['principal', 'teacher'])
  getStudentById(@Body() data: any): any {
    console.log(data);
    return this.studentService.getAllStudent();
  }

  @Post('add')
  addStudent(
    @Body()
    student: {
      studentName: string;
      className: string;
    },
    @User() user: string,
  ) {
    const dto = plainToInstance(StudentDto, student);
    return dto;
  }
}

