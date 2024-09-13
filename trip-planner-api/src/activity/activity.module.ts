import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { ActivityController } from './activity.controller';
import { ActivityDAO } from './activity.dao';
import { ActivityService } from './activity.service';

@Module({
  imports: [PrismaModule],
  controllers: [ActivityController],
  providers: [ActivityService, ActivityDAO],
})
export class ActivityModule {}
