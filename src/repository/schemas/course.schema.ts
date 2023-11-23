import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema({ timestamps: true, versionKey: false })
export class Course {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ trim: true })
  instructor: string;

  @Prop({ required: true })
  duration: number;

  @Prop()
  price: number;

  @Prop({ default: 0 })
  totalEnrolled: number;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
