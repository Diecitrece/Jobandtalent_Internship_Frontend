import type { NextPage } from 'next';
import Image from 'next/image';
import { TextInput } from 'components/UI/TextInput';
import { useState } from 'react';
import { SubmitButton } from 'components/UI/SubmitButton';

const Register: NextPage = () => {
  const [state, setState] = useState({
    firstName: '',
    surNames: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    address: '',
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <Image
              src={'/jobandtalent.png'}
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
                  value={state.firstName}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextInput
                  name='surNames'
                  label='Surnames'
                  type='text'
                  placeholder='Surnames'
                  value={state.surNames}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextInput
                  name='email'
                  label='Email address'
                  type='email'
                  placeholder='Email address'
                  value={state.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextInput
                  name='password'
                  label='Password'
                  type='password'
                  placeholder='Password'
                  value={state.password}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextInput
                  name='passwordConfirmation'
                  label='Confirm password'
                  type='password'
                  placeholder='Confirm password'
                  value={state.passwordConfirmation}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextInput
                  name='phone'
                  label='Phone'
                  type='text'
                  placeholder='Phone'
                  value={state.phone}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <TextInput
                  name='address'
                  label='Address'
                  type='text'
                  placeholder='Address'
                  value={state.address}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div>
              <SubmitButton text='Sign up' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
