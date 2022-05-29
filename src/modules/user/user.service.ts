import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { User } from "./user.entity";
import { USER_REPOSITORY } from "../../constants";
import { UserRequestDTO } from "./dto/userRequestDto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Method used to fetch the users
   */
  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  /**
   * Method used to fetch the user based on email id
   */
  async findOne(email): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email: email } });
  }

  /**
   * Method to check is user already avilable in DB
   * @param user
   * @returns
   */
  async checkUserAlreadyExists(user): Promise<any> {
    const userResponse = await this.userRepository.findOne<User>({
      where: { email: user.email },
    });
    return userResponse;
  }

  /**
   * Method used to validate user details
   * @param email
   * @param password
   * @returns
   */
  async validateUserCredentials(email: string, password: string): Promise<any> {
    const userResponse = await this.userRepository.findOne<User>({
      where: { email: email },
    });

    if (!userResponse) {
      throw new NotFoundException("User not available ");
    }
    if (userResponse && userResponse.password === password) {
      const { password, ...user } = userResponse;
      return userResponse;
    }
    return new UnauthorizedException("Password did not match");
  }

  /**
   * Method used to login and generate the token
   * @param user
   * @returns
   */
  public async login(user: UserRequestDTO): Promise<any> {
    return this.checkUserAlreadyExists(user).then((userData) => {
      if (!userData) {
        return { status: 404 };
      }
      let payload = `${userData.name}${userData.id}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600,
        access_token: accessToken,
        user_id: payload,
        status: 200,
      };
    });
  }

  /**
   * Register new user
   * @param user
   * @returns
   */
  async registerUser(user: UserRequestDTO): Promise<any> {
    const userResponse = this.checkUserAlreadyExists(user);
    if (!userResponse) {
      throw new BadRequestException(
        "User already exists with the email:",
        user.email
      );
    }
    const result = await this.userRepository.create(user);
    const response = result.save();
    return response;
  }

  /*async createFhirResource() {

    const healthcare = await google.healthcare({
      version: 'v1',
      auth: new google.auth.GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      }),
      headers: {'Content-Type': 'application/fhir+json'},
    });
    // Replace the following body with the data for the resource you want to
    // create.
    const body = {
      name: [{use: 'official', family: 'Smith', given: ['Darcy']}],
      gender: 'female',
      birthDate: '1970-01-01',
      resourceType: 'Patient',
    };

    // TODO(developer): uncomment these lines before running the sample
     const cloudRegion = 'us-central1';
     const projectId = 'adjective-noun-123';
     const datasetId = 'my-dataset';
     const fhirStoreId = 'my-fhir-store';
     const resourceType = 'Patient';
    const parent = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}/fhirStores/${fhirStoreId}`;

    const request = {parent, type: resourceType, requestBody: body};
    const resource =
      await healthcare.projects.locations.datasets.fhirStores.fhir.create(
        request
      );
    console.log(`Created FHIR resource with ID ${resource.data.id}`);
    console.log(resource.data);
    return resource
  }*/
}
