import { Module } from '@nestjs/common';
import { CourseModule } from './courses/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [CourseModule, EnrollmentModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
