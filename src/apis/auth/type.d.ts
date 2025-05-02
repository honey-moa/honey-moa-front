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
  isAutoLogin?: boolean;
}

export interface LoginReturn {
  accessToken: string;
  refreshToken: string;
}

export interface ReissueAccessTokenReturn {
  accessToken: string;
}

export interface ChangePasswordRequest {
  id: string;
  token: string;
  newPassword: string;
}
