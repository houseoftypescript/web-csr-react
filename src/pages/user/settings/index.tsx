import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import React from 'react';
import LayoutTemplate from '../../../templates/LayoutTemplate';

const SettingsPage: React.FC = () => {
  return (
    <LayoutTemplate>
      <div className="py-8">
        <Container>
          <Paper className="border p-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-700 uppercase">Activity</h2>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email me when someone comments on my article"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email me when someone answers on my article"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Email me when someone follows me"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-700 uppercase">Application</h2>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="News and announcements"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Weekly product updates"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Weekly blog digest"
                />
              </div>
            </div>
          </Paper>
        </Container>
      </div>
    </LayoutTemplate>
  );
};

export default SettingsPage;
