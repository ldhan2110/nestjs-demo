import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TransformStudentPipe
  implements PipeTransform<{ studentName: string; className: string }>
{
  transform(
    value: { studentName: string; className: string },
    metadata: ArgumentMetadata,
  ) {
    return {
      ...value,
      className: 'ADMIN',
    };
  }
}
