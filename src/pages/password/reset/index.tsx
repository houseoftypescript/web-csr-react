import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from '../../../assets/react.svg';

const ResetPasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const reset = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <main className="w-full h-screen flex items-center justify-center">
        <div className="border shadow-2xl px-8 py-16 rounded max-w-lg w-full">
          <form onSubmit={reset}>
            <div className="flex flex-col gap-8">
              <div className="w-32 mx-auto">
                <Link to="/">
                  <img src={ReactSVG} alt="React" />
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="uppercase text-4xl font-bold">Reset</h1>
                <p className="text-gray-500">Enter new password to reset</p>
              </div>
              <div className="flex flex-col gap-4">
                <TextField
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  required
                />
                <TextField
                  id="confirmedPassword"
                  name="confirmedPassword"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={confirmedPassword}
                  onChange={(event) => setConfirmedPassword(event.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit" variant="contained">
                  Reset Password
                </Button>
                <Link to="/auth/sign-in" className="text-blue-500 text-center">
                  Back to Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
};

export default ResetPasswordPage;
