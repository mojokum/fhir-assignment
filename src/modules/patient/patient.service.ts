import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { PATIENT_REPOSITORY } from "../../constants";
import { Patient } from "./patient.entity";
import { PatientRequestDto } from "../patient/dto/patientRequestDto";
// import { google } from "@googleapis/healthcare";
const google = require("@googleapis/healthcare");
@Injectable()
export class PatientService {
  constructor(
    @Inject(PATIENT_REPOSITORY)
    private readonly patientRepository: typeof Patient
  ) {}

  async getAllPatients(): Promise<Patient[]> {
    return await this.patientRepository.findAll();
  }

  /**
   * Method used to create customer
   * @param customer
   */
  async createPatient(patient: PatientRequestDto): Promise<any> {
    console.log(patient);

    const patientResponse = await this.patientRepository.findOne<Patient>({
      where: { phone: patient.phone },
    });
    if (patientResponse) {
      throw new BadRequestException(
        "Patient Already Exists with phone number" + patientResponse.phone
      );
    }
    const result = await this.patientRepository.create(patient);
    const response = result.save();
    return response;
  }
}
