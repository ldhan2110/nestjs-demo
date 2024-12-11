import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentUsaService {
  getAllStudent() {
    return 'This is USA Student Service';
  }
}
