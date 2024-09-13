import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  create(@Body() body: CreateActivityDto) {
    return this.activityService.create(body);
  }

  @Get()
  findAll() {
    return this.activityService.findAll();
  }

  @Patch(':id')
  updateStatus(@Param('id') id: string) {
    return this.activityService.updateStatus(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityService.remove(id);
  }
}
