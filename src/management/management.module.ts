import { Module } from '@nestjs/common';
import { ManagementController } from './management.controller';
import { ConfigService } from '@nestjs/config';
import { ManagementService } from './management.service';

const mockManagementService = {
  getManagementService() {
    return 'This is management Service';
  },
};

@Module({
  controllers: [ManagementController],
  providers: [
    {
      provide: 'MOCK_MANAGEMENT_SERVICE',
      useValue: mockManagementService,
    },
    {
      provide: 'CONNECTION',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const nodeEnv = configService.get('nodeEnv');
        if (nodeEnv == 'DEVELOPMENT') return 'DEVELOPMENT CONNECTION';
        return 'PRODUCTION CONNECTION';
      },
    },
    ManagementService,
  ],
})
export class ManagementModule {}
