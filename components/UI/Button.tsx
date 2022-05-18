import { ButtonHTMLAttributes } from 'react';

enum TypeButton {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

type Props = {
  text: string;
  color?: string;
  type?: ButtonHTMLAttributes<ButtonHTMLAttributes<HTMLButtonElement>>['type'];
  disabled?: boolean;
};

export const Button = ({
  color = 'bg-indigo-600',
  text,
  type = TypeButton.SUBMIT,
  disabled = false,
}: Props) => {
  return (
    <button
      className={`${color} hover:bg-opacity-75 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
