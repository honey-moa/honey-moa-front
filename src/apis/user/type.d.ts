export interface GetMyInfoReturn {
  id: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  email: string;
  loginType: string;
  mbti: string;
  isEmailVerified: false;
  profileImageUrl: string;
}

export interface PatchMyInfoParams {
  formData: FormData;
}

type ConnectionUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
};

type ConnectionFeature = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
};

export interface ConnectionInfo {
  id: string;
  createdAt: string;
  updatedAt: string;
  requesterId: string;
  requestedId: string;
  status: 'ACCEPTED';
  blog?: ConnectionFeature;
  chatRoom?: ConnectionFeature;
  requester?: ConnectionUser;
  requested?: ConnectionUser;
}
