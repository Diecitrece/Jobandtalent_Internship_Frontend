import type { NextPage } from 'next';
import Image from 'next/image';
import { TextInput } from 'components/UI/TextInput';
import React, { useReducer } from 'react';
import { Button } from 'components/UI/Button';
import { UserRegister } from 'lib/models/user';
import jobandtalent from 'public/jobandtalent.png';
import { ErrorMsg } from 'components/UI/ErrorMsg';

const Register: NextPage = () => {
  const INITIAL_VALUES: UserRegister = {
    firstName: { value: '', error: '' },
    surNames: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    phone: { value: '', error: '' },
    address: { value: '', error: '' },
  };

  const [inputValues, dispatchInputValues] = useReducer(
    (currentValue: UserRegister, newValue: any) => ({
      ...currentValue,
      ...newValue,
    }),
    INITIAL_VALUES
  );

  const enum TypeInput {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    TEL = 'tel',
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatchInputValues({ [name]: { value } });
  };

  const handleErrors = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = e.target;

    if (type === TypeInput.EMAIL) {
      !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        ? dispatchInputValues({ [name]: { value, error: 'Invalid email' } })
        : dispatchInputValues({ [name]: { value, error: '' } });
    }

    if (type === TypeInput.TEL) {
      !value.match(/^[0-9]{9,13}$/)
        ? dispatchInputValues({
            value,
            [name]: {
              error: 'Phone numbers should be 9 or 13 digits in length only',
            },
          })
        : dispatchInputValues({ [name]: { value, error: '' } });
    }

    if (type === TypeInput.PASSWORD) {
      value.length === 0
        ? dispatchInputValues({
            [name]: { error: 'Password cannot be empty' },
          })
        : dispatchInputValues({ [name]: { value, error: '' } });
    }

    if (type === TypeInput.TEXT) {
      value.length === 0
        ? dispatchInputValues({
            [name]: { value, error: 'Field cannot be empty' },
          })
        : dispatchInputValues({ [name]: { value, error: '' } });
    }

    if (name === 'confirmPassword') {
      value !== inputValues.password.value
        ? dispatchInputValues({
            [name]: { value, error: 'Passwords do not match' },
          })
        : dispatchInputValues({ [name]: { value, error: '' } });
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues);
  };

  const disabledButton = Object.values(inputValues).some(
    (value) => value.error
  );

  return (
    <>
      {JSON.stringify(inputValues)}
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <Image
              src={jobandtalent}
              alt={'jobandtalent'}
              width={600}
              height={150}
              objectFit={'contain'}
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign up to our company
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleOnSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <TextInput
                  name='firstName'
                  label='First name'
                  type='text'
                  placeholder='First name'
                  value={inputValues.firstName.value}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                />
              </div>
              {inputValues.firstName.error && (
                <ErrorMsg error={inputValues.firstName.error} />
              )}
              <div>
                <TextInput
                  name='surNames'
                  label='Surnames'
                  type='text'
                  placeholder='Surnames'
                  value={inputValues.surNames.value}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                />
              </div>
              {inputValues.surNames.error && (
                <ErrorMsg error={inputValues.surNames.error} />
              )}
              <div>
                <TextInput
                  name='email'
                  label='Email address'
                  type='email'
                  placeholder='Email address'
                  value={inputValues.email.value}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                />
              </div>
              {inputValues.email.error && (
                <ErrorMsg error={inputValues.email.error} />
              )}
              <div>
                <TextInput
                  name='password'
                  label='Password'
                  type='password'
                  placeholder='Password'
                  value={inputValues.password.value}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                />
              </div>
              {inputValues.password.error && (
                <ErrorMsg error={inputValues.password.error} />
              )}
              <div>
                <TextInput
                  name='confirmPassword'
                  label='Confirm password'
                  type='password'
                  placeholder='Type your password before'
                  value={inputValues.confirmPassword.value}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                  disabled={inputValues.password.value === ''}
                />
              </div>
              {inputValues.confirmPassword.error && (
                <ErrorMsg error={inputValues.confirmPassword.error} />
              )}
              <div>
                <TextInput
                  name='phone'
                  label='Phone'
                  type='tel'
                  placeholder='Phone'
                  value={inputValues.phone.value}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                />
              </div>
              {inputValues.phone.error ? (
                <div className='text-red-600'>{inputValues.phone.error}</div>
              ) : null}
              <div>
                <TextInput
                  name='address'
                  label='Address'
                  type='text'
                  placeholder='Address'
                  value={inputValues.address.value}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                />
              </div>
              {inputValues.address.error && (
                <ErrorMsg error={inputValues.address.error} />
              )}
            </div>
            <div>
              <Button text='Sign up' disabled={disabledButton} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
