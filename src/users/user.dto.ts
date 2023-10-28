import { IsString } from 'class-validator';

class CreateUserDto {
  @IsString()
  public author: string;

  @IsString()
  public content: string;

  @IsString()
  public title: string;
}

export default CreateUserDto;