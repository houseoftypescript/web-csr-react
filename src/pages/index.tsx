import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
  <main className="w-full h-screen flex items-center justify-center">
    <div className="flex flex-col gap-4 text-center uppercase">
      <h1 className="text-9xl font-bold uppercase">React</h1>
      <p className="text-3xl">TypeScript + Tailwind CSS + Material UI</p>
      <Link to="/auth/sign-in">
        <Button variant="contained" fullWidth>
          Sign In
        </Button>
      </Link>
    </div>
  </main>
);

export default HomePage;
