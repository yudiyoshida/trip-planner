import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivityDAO {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateActivityDto) {
    return this.prisma.activity.create({
      data,
    });
  }

  findAll() {
    return this.prisma.activity.findMany({
      orderBy: { date: 'desc', time: 'asc' },
    });
  }

  findOne(id: string) {
    return this.prisma.activity.findUnique({
      where: { id },
    });
  }

  updateStatus(id: string, checked: boolean) {
    return this.prisma.activity.update({
      where: { id },
      data: { checked },
    });
  }

  remove(id: string) {
    return this.prisma.activity.delete({
      where: { id },
    });
  }
}
