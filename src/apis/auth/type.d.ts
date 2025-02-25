export interface RegisterRequest {
  email: string;
  password: string;
  nickname: string;
  mbti?: null;
}

export interface RegisterReturn {
  id: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginReturn {
  accessToken: string;
}

export interface ReissueAccessTokenReturn {
  accessToken: string;
}

export interface ChangePasswordRequest {
  id: string;
  token: string;
  newPassword: string;
}
