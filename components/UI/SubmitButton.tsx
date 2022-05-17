type Props = {
  text: string;
  color?: string;
};

export const SubmitButton = ({ color = 'bg-indigo', text }: Props) => {
  return (
    <button
      className={`${color}-600 hover:${color}-700 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      {text}
    </button>
  );
};
