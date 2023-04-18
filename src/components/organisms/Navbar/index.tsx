import Container from '@mui/material/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../../molecules/UserMenu';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="py-8 border-b">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 uppercase">
              <h1 className="text-2xl">
                <Link to="/apps">Solid</Link>
              </h1>
              <Link to="/apps/chart">Chart</Link>
              <Link to="/apps/table">Table</Link>
              <Link to="/apps/calendar">Calendar</Link>
            </div>
            <div>
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
