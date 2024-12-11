import { DynamicModule, Global, Module, OnModuleInit } from '@nestjs/common';
import { StudentCanadaService } from './studentCanada.service';
import { StudentUsaService } from './studentUsa.service';
import { ConfigService } from '@nestjs/config';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Global()
@Module({})
export class StudentModule implements OnModuleInit {
  onModuleInit() {
    console.log('Student Module is initializing.');
  };
  static forRoot(): DynamicModule {
    return {
      module: StudentModule,
      providers: [
        {
          provide: 'STUDENT_SERVICE',
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            const country = configService.get('country');
            if (country == 'USA') {
              return new StudentUsaService();
            }
            return new StudentCanadaService();
          },
        },
        StudentService,
      ],
      controllers: [StudentController],
      exports: ['STUDENT_SERVICE'],
    };
  }
}
