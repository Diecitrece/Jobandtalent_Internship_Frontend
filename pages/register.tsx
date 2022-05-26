import type { NextPage } from 'next';
import { InputProps } from 'components/UI/Input';
import { Form } from 'components/Form';

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

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const { remember, ...user } = data;

    await fetch(`${process.env.API_URL}api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.status === 201) {
        console.log(
          '🚀 ~ file: register.tsx ~ line 83 ~ handleOnSubmit ~ res',
          res
        );
        return res.json();
      }
      if (res.status === 400) {
        console.log(
          '🚀 ~ file: register.tsx ~ line 87 ~ handleOnSubmit ~ res',
          res
        );
        return res.json();
      }
      return null;
    });
  };

  return (
    <Form
      inputs={inputs}
      onSubmit={handleOnSubmit}
      title='Sing up to our company'
    />
  );
};

export default Register;
