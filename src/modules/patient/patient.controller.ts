import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Header,
  HttpStatus,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { PatientRequestDto } from "../patient/dto/patientRequestDto";
import { PatientResponseDto } from "../patient/dto/patientResponseDto";
import { PatientService } from "./patient.service";

@ApiTags("Patient Services")
@Controller("patient")
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Get("/patients")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Return all the Patients" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The request is used to return all users.",
    type: PatientResponseDto,
  })
  async getAllPatient() {
    try {
      return await this.patientService.getAllPatients();
    } catch (error) {
      console.error(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post("/create")
  @Header("content-type", "application/json")
  @ApiOperation({ summary: "Create patient" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Creates new patient information",
    type: PatientRequestDto,
  })
  @ApiBody({ description: "Request Body", type: PatientResponseDto })
  async Createpatient(@Body() patientDto: PatientRequestDto) {
    try {
      Object.assign(patientDto, { createdby: "kumar" });
      return await this.patientService.createPatient(patientDto);
    } catch (error) {
      throw error;
    }
  }
}
