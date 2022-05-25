import Image from 'next/image';
import { Input } from 'components/UI/Input';
import React, { useReducer } from 'react';
import { Button } from 'components/UI/Button';
import jobandtalent from 'public/jobandtalent.png';
import { ErrorMsg } from 'components/UI/ErrorMsg';

export const Form = (fields: any) => {
  const INITIAL_VALUES = Object.keys(fields).map((field) => ({
    value: '',
    error: '',
  }));

  const [inputValues, dispatchInputValues] = useReducer(
    (currentValue: any, newValue: any) => ({
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

  // const disabledButton = Object.values(inputValues).some(
  //   (value) => value.error
  // );

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
              {/* {Object.entries(fields).map(([name, { type }]) => (
                <Input
                  key={name}
                  name={name}
                  label={name}
                  type={type}
                  placeholder={name}
                  value={inputValues[name].value}
                  disabled={false}
                  onChange={handleChangeInput}
                  onBlur={handleErrors}
                />
                {inputValues.field.error && (
                  <ErrorMsg error={inputValues.field.error} />
                )}
              ))} */}
            </div>
            <div>
              <Button text='Sign up' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
