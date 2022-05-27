import { getCookies, httpClient, logout, setCookies } from 'http-client';
import type { NextPage } from 'next';
import Image from 'next/image';
import jobandtalent from 'public/jobandtalent.png';
import { useRouter } from 'next/router';
import { Button } from 'components/UI/Button';
import { useEffect, useState } from 'react';
import { Spinner } from 'components/UI/Spinner';

const Home: NextPage = () => {
  const router = useRouter();
  const cookies = getCookies();
  const [canLoad, setCanLoad] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  useEffect(() => {
    !cookies.token ? router.push('/login') : setCanLoad(true);
  }, [cookies.token, router]);

  if (!canLoad) {
    return <Spinner />;
  }
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
          <Button text='Log out' type='button' onClick={handleLogout} />
        </div>
      </div>
    </>
  );
};

export default Home;
