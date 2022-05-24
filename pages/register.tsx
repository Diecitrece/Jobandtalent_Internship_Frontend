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
    console.log(
      '🚀 ~ file: register.tsx ~ line 72 ~ handleOnSubmit ~ data',
      data
    );
  };

  return <Form inputs={inputs} onSubmit={handleOnSubmit} />;
};

export default Register;
