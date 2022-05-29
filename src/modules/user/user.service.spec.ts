import { JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/sequelize";
import { Test, TestingModule } from "@nestjs/testing";
import { User } from "./user.entity";
import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;
  let jwtService : JwtService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, JwtService,
        {
            provide: getModelToken(User),
            useValue: {},
        },],
      
    }).compile();

    service = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
