import type { NextPage } from 'next';
import { InputProps } from 'components/UI/Input';
import { Form } from 'components/Form';
const Login: NextPage = () => {
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
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <Form
      inputs={inputs}
      onSubmit={handleOnSubmit}
      title='Log in to our company'
    />
  );
};

export default Login;
