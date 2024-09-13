import { Injectable, NotFoundException } from '@nestjs/common';
import { ActivityDAO } from './activity.dao';
import { CreateActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivityService {
  constructor(private readonly activityDAO: ActivityDAO) {}

  async create(data: CreateActivityDto) {
    return this.activityDAO.create(data);
  }

  async findAll() {
    return this.activityDAO.findAll();
  }

  async updateStatus(id: string) {
    const activity = await this.activityDAO.findOne(id);
    if (!activity) {
      throw new NotFoundException('Activity not found');
    }

    return this.activityDAO.updateStatus(activity.id, !activity.checked);
  }

  async remove(id: string) {
    const activity = await this.activityDAO.findOne(id);
    if (!activity) {
      throw new NotFoundException('Activity not found');
    }

    return this.activityDAO.remove(activity.id);
  }
}
