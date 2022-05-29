import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private jwtTokenService: JwtService) {}

  async loginWithCredentials(user: any) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
