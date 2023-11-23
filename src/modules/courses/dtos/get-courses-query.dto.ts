import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class GetCoursesQueryDto {
  @Min(1)
  @IsNumber()
  @IsOptional()
  page?: number;

  @Min(1)
  @IsNumber()
  @IsOptional()
  limit?: number;

  @IsString()
  @IsOptional()
  instructor?: string;

  @IsNumber()
  @IsOptional()
  duration?: number;

  @IsNumber()
  @IsOptional()
  price?: number;
}
