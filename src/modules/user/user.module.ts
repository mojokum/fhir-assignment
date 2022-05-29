import { Module } from "@nestjs/common";
import { UserService } from ".././user/user.service";
import { UserProvider } from "./user.provider";
import { UserController } from "./user.controller";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [AuthModule],
  providers: [UserService, ...UserProvider],
  controllers: [UserController],
})
export class UserModule {}
