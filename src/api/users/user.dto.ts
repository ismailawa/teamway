import { IsString } from 'class-validator';

class CreateUserDto {
  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public username: string;

  @IsString()
  public email: string;

  @IsString()
  public address: string;
}

export default CreateUserDto;
