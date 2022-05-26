import { Button } from './UI/Button';
import { Input, InputProps } from './UI/Input';
import Image from 'next/image';
import { useReducer } from 'react';
import jobandtalent from 'public/jobandtalent.png';
import { FormTitle } from './UI/FormTitle';

type FormProps = {
  inputs: InputProps[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
};

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

export const Form = ({ inputs, onSubmit, title }: FormProps) => {
  const [formState, dispatchInputValues] = useReducer(reducerFn, inputs);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatchInputValues({ name, value });
  };

  return (
    <>
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
          </div>
          <FormTitle message={title} />
          <form className='mt-8 space-y-6' onSubmit={onSubmit}>
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
                  required={input.required}
                  minLength={input.minLength}
                  maxLength={input.maxLength}
                  pattern={input.pattern}
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
