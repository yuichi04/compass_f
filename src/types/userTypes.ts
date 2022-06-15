export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type LogInParams = {
  email: string;
  password: string;
};

export type UserParams = {
  name: string;
  email: string;
  image?: string;
  createdAt: string;
  isSignedIn?: boolean;
  admin?: boolean;
};

export type UpdateUserInfo = {
  name?: string;
  email?: string;
  password?: string;
  image?: string;
};

// 問い合わせ用
export type ContactBoardType = {
  email: string;
  category: string;
  content: string;
};
