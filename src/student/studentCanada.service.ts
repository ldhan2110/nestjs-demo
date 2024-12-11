import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentCanadaService {
  getAllStudent() {
    return 'This is Canada Student Service';
  }
}
