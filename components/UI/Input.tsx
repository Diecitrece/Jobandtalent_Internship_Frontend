export type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
};

export const Input = ({
  name,
  label,
  type,
  placeholder,
  value,
  disabled = false,
  onChange,
  pattern,
  required = false,
  minLength,
  maxLength,
}: InputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className='block text-md font-medium text-gray-700 my-2'
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={type}
        disabled={disabled}
        className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={pattern}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
    </>
  );
};
