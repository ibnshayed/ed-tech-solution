import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enrollment } from '../../repository';
import { CourseService } from '../courses/course.service';
import { CreateEnrollmentDto } from './dtos/create-enrollment.service.dto';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectModel(Enrollment.name) private enrollmentModel: Model<Enrollment>,
    private courseService: CourseService,
  ) {}

  async create(dto: CreateEnrollmentDto) {
    const { studentName, courseId } = dto;

    const course = await this.courseService.getCourseById(courseId);

    if (!course) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }

    const newEnrollment = this.enrollmentModel.create({
      studentName,
      courseId,
      enrollmentDate: new Date(),
    });

    await this.courseService.courseEnrollmentIncrease(course.id);

    return newEnrollment;
  }
}
