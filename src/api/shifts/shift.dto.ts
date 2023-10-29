import { IsString } from 'class-validator';

class CreateShiftDto {
  @IsString()
  public title: string;

  @IsString()
  public startTime: string;

  @IsString()
  public endTime: string;
}

export default CreateShiftDto;
