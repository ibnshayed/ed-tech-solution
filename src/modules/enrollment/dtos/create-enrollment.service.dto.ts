import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsString()
  @IsNotEmpty()
  studentName: string;

  @IsMongoId()
  @IsNotEmpty()
  courseId: string;
}
