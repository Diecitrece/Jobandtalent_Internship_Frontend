import type { NextPage } from 'next';
import Image from 'next/image';
import { Input, InputProps } from 'components/UI/Input';
import React, { useReducer } from 'react';
import { Button } from 'components/UI/Button';
import jobandtalent from 'public/jobandtalent.png';

const reducerFn = (
  state: InputProps[],
  payload: { name: string; value: string }
) => {
  const { name, value } = payload;
  state = state.map((field) => {
    if (field.name === name) {
      field.value = value;
    }
    return field;
  });

  return state;
};

const Register: NextPage = () => {
  const inputs: InputProps[] = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      value: '',
    },
    {
      name: 'surNames',
      label: 'Sur Name',
      type: 'text',
      placeholder: 'Sur Name',
      value: '',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      value: '',
      pattern: '/^([w.%+-]+)@([w-]+.)+([w]{2,})$/i',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      value: '',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Phone',
      value: '',
      pattern: '/^[0-9]{9,13}$/',
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Address',
      value: '',
    },
  ];

  const [formState, dispatchInputValues] = useReducer(reducerFn, inputs);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatchInputValues({ name, value });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <>
      {JSON.stringify(formState)}
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
              {formState.map((input) => (
                <Input
                  key={input.name}
                  name={input.name}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={handleChangeInput}
                />
              ))}
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

export default Register;
