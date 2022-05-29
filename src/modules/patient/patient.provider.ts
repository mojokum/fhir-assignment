import { PATIENT_REPOSITORY } from "src/constants";
import { Patient } from "./patient.entity";

export const PatientProvider = [
  {
    provide: PATIENT_REPOSITORY,
    useValue: Patient,
  },
];
