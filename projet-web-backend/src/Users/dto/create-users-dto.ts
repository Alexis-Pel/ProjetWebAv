export class CreateUsersDTO {
  readonly pseudo: string;
  readonly email: string;
  readonly description: string;
  readonly img: string;
  readonly hashPassword: string;
  readonly created_at: Date;
}
