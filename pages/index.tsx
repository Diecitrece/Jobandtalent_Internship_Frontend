import type { NextPage } from 'next';
import Image from 'next/image';
import jobandtalent from 'public/jobandtalent.png';

const Home: NextPage = () => {
  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <Image
            src={jobandtalent}
            alt={'jobandtalent'}
            width={600}
            height={150}
            objectFit={'contain'}
          />
          <h1 className='text-center text-3xl font-extrabold text-gray-900'>
            Welcome to Job and Talent
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
