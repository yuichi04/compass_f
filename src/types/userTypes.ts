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
  createdAt: string;
  isSignedIn?: boolean;
  admin?: boolean;
};
