import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PaginateModel } from 'mongoose';
import { Course } from '../../repository';
import { CreateCourseDto } from './dtos/create-course.dto';
import { GetCoursesQueryDto } from './dtos/get-courses-query.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>,
    @InjectModel(Course.name) private courseModelPag: PaginateModel<Course>,
  ) {}

  create(dto: CreateCourseDto) {
    const { title, description, instructor, duration, price } = dto;
    return this.courseModel.create({
      title,
      description,
      instructor,
      duration,
      price,
    });
  }

  getCourses(query: GetCoursesQueryDto) {
    let { page, limit } = query;
    const { instructor, duration, price } = query;

    const filterQuery = {};

    page = page || 1;
    limit = limit || 10;
    if (instructor)
      filterQuery['instructor'] = { $regex: instructor, $options: 'i' };
    if (duration) filterQuery['duration'] = duration;
    if (price) filterQuery['price'] = price;

    return this.courseModelPag.paginate(filterQuery, {
      page,
      limit,
      lean: true,
    });
  }

  getCourseById(id: string) {
    return this.courseModel.findById(id);
  }

  courseEnrollmentIncrease(id) {
    return this.courseModel.findByIdAndUpdate(id, {
      $inc: { totalEnrolled: 1 },
    });
  }
}
