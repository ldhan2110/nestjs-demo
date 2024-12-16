import { Controller, Get, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { ManagementService } from './management.service';

@Controller('management')
export class ManagementController {
  constructor(
    @Inject('MOCK_MANAGEMENT_SERVICE')
    private readonly mockManagementService: any,

    @Inject('CONNECTION')
    private readonly connection: string,

    private readonly managementService: ManagementService
  ) {}

  @Get()
  getHello() {
     throw new HttpException('error', HttpStatus.AMBIGUOUS);
    //return this.connection;
  }
}
