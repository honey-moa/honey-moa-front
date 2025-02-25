export interface ErrorResponse {
  code: string;
  message: string;
  errors: {
    reason: string;
  }[];
}
