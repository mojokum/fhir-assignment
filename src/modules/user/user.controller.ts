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
import { UserRequestDTO } from "./dto/userRequestDto";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,
  ApiOperation,
} from "@nestjs/swagger";
import { AuthService } from "../auth/auth.service";
import { UserResponseDTO } from "./dto/userResponseDto";

@ApiTags("User Services")
@Controller("user")
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  /**
   * Method used to register new user
   * @param user
   * @returns
   */
  @Post("/register")
  @Header("content-type", "application/json")
  @ApiOperation({ summary: "Create ApplicationUser" })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "The ApplicationUser has been successfully created",
    type: UserRequestDTO,
  })
  @ApiBody({ description: "Request Body", type: UserRequestDTO })
  async registerUser(@Body() user: UserRequestDTO) {
    try {
      Object.assign(user, { createdby: "kums" });
      return await this.userService.registerUser(user);
    } catch (error) {
      throw error;
    }
  }

  @Post("login")
  @Header("content-type", "application/json")
  @ApiOperation({ summary: "User Login" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The User has been logged in successfully",
    type: UserRequestDTO,
  })
  @ApiBody({ description: "Request Body", type: UserRequestDTO })
  async login(@Body() req) {
    const userDetails = await this.userService.validateUserCredentials(
      req.email,
      req.password
    );
    return this.authService.loginWithCredentials(userDetails);
  }

  /**
   * Method used to retrive all application users
   * @returns
   */
  @Get("/users")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Return all the Users" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The request is used to return all users.",
    type: UserResponseDTO,
  })
  async getAllUsers() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      console.error(error);
    }
  }
}
