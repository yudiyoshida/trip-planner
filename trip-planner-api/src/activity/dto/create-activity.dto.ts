import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString({ message: '$property must be a string' })
  @IsNotEmpty({ message: '$property is required' })
  title: string;

  @IsString({ message: '$property must be a string' })
  @IsNotEmpty({ message: '$property is required' })
  date: string;

  @IsString({ message: '$property must be a string' })
  @IsNotEmpty({ message: '$property is required' })
  time: string;

  @IsBoolean({ message: '$property must be a boolean' })
  @IsNotEmpty({ message: '$property is required' })
  checked: boolean;
}
