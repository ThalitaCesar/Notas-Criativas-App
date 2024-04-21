import React from 'react';
import HomePage from './pages/HomePage';
import { api } from '~/trpc/server';

const Home: React.FC = () => {
  const latestPostPromise = api.post.getAll();
  console.log('latestPostPromise:', latestPostPromise);

  return (
    <div className='bg-white dark:bg-gray-600 min-h-[100vh] max-h[100%]'>
      <HomePage latestPostPromise={latestPostPromise} />
    </div>
  );
};

export default Home;
