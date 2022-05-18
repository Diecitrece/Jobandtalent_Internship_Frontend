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

export enum UserRegisterAction {
  FIRST_NAME_CHANGED = 'FIRST_NAME_CHANGED',
  FIRST_NAME_ERROR = 'FIRST_NAME_ERROR',
  SUR_NAMES_CHANGED = 'SUR_NAMES_CHANGED',
  SUR_NAMES_ERROR = 'SUR_NAMES_ERROR',
  EMAIL_CHANGED = 'EMAIL_CHANGED',
  EMAIL_ERROR = 'EMAIL_ERROR',
  PASSWORD_CHANGED = 'PASSWORD_CHANGED',
  PASSWORD_ERROR = 'PASSWORD_ERROR',
  CONFIRM_PASSWORD_CHANGED = 'CONFIRM_PASSWORD_CHANGED',
  CONFIRM_PASSWORD_ERROR = 'CONFIRM_PASSWORD_ERROR',
  PHONE_CHANGED = 'PHONE_CHANGED',
  PHONE_ERROR = 'PHONE_ERROR',
  ADDRESS_CHANGED = 'ADDRESS_CHANGED',
  ADDRESS_ERROR = 'ADDRESS_ERROR',
}
