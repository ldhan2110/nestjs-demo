import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class StudentPipe
  implements PipeTransform<{ studentName: string; className: string }>
{
  transform(
    value: { studentName: string; className: string },
    metadata: ArgumentMetadata,
  ) {
    console.log(metadata);
    if (!value.className || !value.studentName) {
      throw new HttpException(
        'Missing required fields',
        HttpStatus.BAD_REQUEST,
      );
    }

    return value;
  }
}