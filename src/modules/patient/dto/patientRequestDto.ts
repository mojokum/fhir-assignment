import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsInt, IsPhoneNumber } from "class-validator";

export class PatientRequestDto {
  /**
   * patientID
   *
   * @type {number}
   * @memberof patientRequestDto
   */
  @ApiProperty({ example: "108", description: "patient Id of the patient" })
  patientId: number;

  /**
   * UserID
   *
   * @type {number}
   * @memberof patientRequestDto
   */
  @ApiProperty({ example: "108", description: "patient of the patient" })
  @IsString()
  name: string;

  /**
   * UserID
   *
   * @type {number}
   * @memberof patientRequestDto
   */
  @ApiProperty({ example: "108", description: "patient of the patient" })
  @IsString()
  email: string;

  /**
   * UserID
   *
   * @type {number}
   * @memberof patientRequestDto
   */
  @ApiProperty({ example: "108", description: "patient of the patient" })
  @IsString()
  initial: string;

  /**
   * RoleID
   *
   * @type {number}
   * @memberof patientRequestDto
   */
  @ApiProperty({ example: "108", description: "RoleID of the patient" })
  @IsInt()
  age: number;

  /**
   * RoleID
   *
   * @type {number}
   * @memberof patientRequestDto
   */
  @ApiProperty({ example: "108", description: "RoleID of the patient" })
  @IsPhoneNumber('IN')
  phone: string;

  /**
   * CreatedBy
   *
   * @type {string}
   * @memberof patientRequestDto
   */
  @ApiProperty({
    example: "Hello World",
    description: "CreatedBy of the patient",
  })
  @IsString()
  gender: string;

  /**
   * CreatedBy
   *
   * @type {string}
   * @memberof patientRequestDto
   */
  @ApiProperty({
    example: "Hello World",
    description: "maritalStatus of the patient",
  })
  @IsString()
  maritalStatus: string;

  /**
   * CreatedOn
   *
   * @type {Date}
   * @memberof patientRequestDto
   */
  @ApiProperty({
    example: "2017-05-13 07:59:38",
    description: "CreatedOn of the patient",
  })
  createdon: Date;

  /**
   * UpdatedBy
   *
   * @type {string}
   * @memberof patientRequestDto
   */
  @ApiProperty({
    example: "Hello World",
    description: "UpdatedBy of the patient",
  })
  createdby: string;
}
