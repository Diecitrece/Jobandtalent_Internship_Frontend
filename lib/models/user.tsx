export type UserRegister = {
  firstName: { value: string; error: string };
  surNames: { value: string; error: string };
  email: { value: string; error: string };
  password: { value: string; error: string };
  confirmPassword: { value: string; error: string };
  phone: { value: string; error: string };
  address: { value: string; error: string };
};

export type UserCredentials = {
  email: string;
  password: string;
};
