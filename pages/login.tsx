import type { NextPage } from 'next';
import { InputProps } from 'components/UI/Input';
import { Form } from 'components/Form';
import { ErrorMsg } from 'components/UI/ErrorMsg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { setCookies, getCookies } from 'http-client';
import Link from 'next/link';
import { useEffect } from 'react';
import { Spinner } from 'components/UI/Spinner';

const Login: NextPage = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();
  const cookies = getCookies();
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    cookies.token ? router.push('/') : setCanLoad(true);
  }, [cookies.token, router]);

  const inputs: InputProps[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      value: '',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      value: '',
    },
  ];

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const { remember, ...loginData } = data;

    const response = await fetch(`${process.env.API_URL}api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    if (response.status === 200) {
      const { accessToken, refreshToken } = await response.json();
      setCookies(accessToken, refreshToken);
      router.push('/');
    }
    if (response.status === 400) {
      setErrorMsg(await response.text());
    }
  };

  if (!canLoad) {
    return <Spinner />;
  }

  return (
    <>
      {errorMsg && <ErrorMsg message={errorMsg} />}
      <Form
        inputs={inputs}
        onSubmit={handleOnSubmit}
        title='Log in to our company'
      />
      <div className='text-center'>
        <span className='text-muted'>Do not have an account? </span>
        <Link href='/register'>
          <a className='text-muted font-weight-bold ml-1 text-sky-400'>
            Sign up
          </a>
        </Link>
      </div>
    </>
  );
};

export default Login;
