import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEnrollmentDto } from './dtos/create-enrollment.service.dto';
import { EnrollmentService } from './enrollment.service';
@ApiTags('enrollment')
@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post('create')
  create(@Body() dto: CreateEnrollmentDto) {
    return this.enrollmentService.create(dto);
  }
}
