import { InputState } from './form';

export type UserRegister = {
  firstName: InputState;
  surNames: InputState;
  email: InputState;
  password: InputState;
  confirmPassword: InputState;
  phone: InputState;
  address: InputState;
};

export type UserCredentials = {
  email: string;
  password: string;
};
