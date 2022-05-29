import { Module } from "@nestjs/common";
import { PatientProvider } from "./patient.provider";
import { PatientController } from "./patient.controller";
import { AuthModule } from "../auth/auth.module";
import { PatientService } from "./patient.service";

@Module({
  imports: [AuthModule],
  providers: [PatientService, ...PatientProvider],
  controllers: [PatientController],
})
export class PatientModule {}
