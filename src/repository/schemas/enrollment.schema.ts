import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from './course.schema';

export type EnrollmentDocument = HydratedDocument<Enrollment>;

@Schema({ timestamps: true, versionKey: false })
export class Enrollment {
  @Prop({ required: true, trim: true })
  studentName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  courseId: Course;

  @Prop()
  enrollmentDate: Date;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);
