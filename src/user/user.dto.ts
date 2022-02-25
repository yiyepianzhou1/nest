export class CreateUserDTO {
  readonly user_name: string;
  readonly password: string;
  readonly user_id: number;
}

export class EditUserDTO {
  readonly user_name: string;
  readonly password: string;
}
