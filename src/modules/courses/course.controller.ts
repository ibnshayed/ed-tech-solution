import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Course } from './../../repository';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { GetCoursesQueryDto } from './dtos/get-courses-query.dto';

@ApiTags('course')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('create')
  create(@Body() dto: CreateCourseDto) {
    return this.courseService.create(dto);
  }

  @Get('all-courses')
  getCourses(@Query() query: GetCoursesQueryDto) {
    return this.courseService.getCourses(query);
  }

  @Get(':id')
  getCourseById(@Param('id') id: string): Promise<Course> {
    return this.courseService.getCourseById(id);
  }
}
