type Props = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
}: Props) => {
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
        required
        className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};
