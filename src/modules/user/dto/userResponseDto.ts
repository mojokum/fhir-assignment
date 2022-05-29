import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class UserResponseDTO {
  @ApiProperty({ example: "kums", description: "user name" })
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({ example: "test@test.com", description: "email of the user" })
  public email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "password", description: "password of the user" })
  public password: string;

  @ApiProperty({ example: "user", description: "createdBy of the user" })
  public createdby: string;
}
