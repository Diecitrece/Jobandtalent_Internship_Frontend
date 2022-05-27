import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { InputProps } from 'components/UI/Input';
import { Form } from 'components/Form';
import { ErrorMsg } from 'components/UI/ErrorMsg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getCookies } from 'http-client';
import { Spinner } from 'components/UI/Spinner';

const Register: NextPage = () => {
  const inputs: InputProps[] = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      value: '',
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    {
      name: 'surNames',
      label: 'Sur Name',
      type: 'text',
      placeholder: 'Sur Name',
      value: '',
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      value: '',
      pattern: '^[\\w.%+-]+@([\\w-]+\\.)+[\\w]{2,}$',
      required: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password',
      value: '',
      required: true,
      minLength: 6,
      maxLength: 20,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: 'Phone',
      value: '',
      pattern: '^[0-9]{9,13}$',
      required: true,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Address',
      value: '',
      required: true,
      minLength: 3,
      maxLength: 30,
    },
  ];

  const [errorMsg, setErrorMsg] = useState('');
  const [canLoad, setCanLoad] = useState(false);
  const router = useRouter();
  const cookies = getCookies();

  useEffect(() => {
    cookies.token ? router.push('/') : setCanLoad(true);
  }, [cookies.token, router]);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const { remember, ...user } = data;

    const response = await fetch(`${process.env.API_URL}api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.status === 201) {
      router.push('/login');
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
        title='Sing up to our company'
      />
      <div className='text-center'>
        <span className='text-muted'>Already have an account? </span>
        <Link href='/login'>
          <a className='text-muted font-weight-bold ml-1 text-sky-400'>
            Log in
          </a>
        </Link>
      </div>
    </>
  );
};

export default Register;
