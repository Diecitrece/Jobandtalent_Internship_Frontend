export type FormtTitleProps = {
  message: string;
};
export const FormTitle = ({ message }: FormtTitleProps) => {
  return (
    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
      {message}
    </h2>
  );
};
