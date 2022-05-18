import type { NextPage } from 'next';
import Image from 'next/image';
import { TextInput } from 'components/UI/TextInput';
import { useState } from 'react';
import { Button } from 'components/UI/Button';
import { UserCredentials } from 'lib/models/user';

const Login: NextPage = () => {
  const INITIAL_VALUES: UserCredentials = {
    email: '',
    password: '',
  };
  const [state, setState] = useState<UserCredentials>({
    ...INITIAL_VALUES,
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
    setState({
      ...INITIAL_VALUES,
    });
  };

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <Image
              src={'/jobandtalent.png'}
              alt='jobandtalent'
              width={600}
              height={150}
              objectFit={'contain'}
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleOnSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
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
            </div>

            <div>
              <Button text='Sign in' color='bg-gradient-to-r from-red-500/50' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
