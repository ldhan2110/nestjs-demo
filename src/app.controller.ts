import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
@Controller('/app')
export class AppController {
  constructor(@Inject('STUDENT_SERVICE') private readonly studentService) {}
  @Get()
  getHello() {
    return this.studentService.getAllStudent();
  }

  @Post('create')
  getHelloPost(@Body() params: any): string {
    console.log(params);
    return 'Hello World';
  }
}
