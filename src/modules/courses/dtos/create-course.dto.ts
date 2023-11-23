import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  instructor: string;

  @IsInt()
  @IsNotEmpty()
  duration: number;

  @IsNumber()
  price: number;
}
