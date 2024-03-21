export class CustomError {
  error: boolean;
  description: string;
  statusCode: number;

  constructor(error: boolean = true, description: string, statusCode: number) {
    this.error = error;
    this.description = description;
    this.statusCode = statusCode;
  }
}
