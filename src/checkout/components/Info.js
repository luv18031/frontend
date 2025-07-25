import Typography from '@mui/material/Typography';
import * as React from 'react';


function Info({ activeStep }) {

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        {activeStep === 0 ? 'Profile Verification' : (activeStep === 1 ? 'Label Verification' : 'Agreement Signing')}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'green'  }}>
        {activeStep === 0 ? 'Account Information' : 'Youtube Channel Details' }
      </Typography>
            <Typography variant="subtitle1" sx={{ color: 'green' }}>
        {activeStep === 0 ? 'Address Information' : 'Youtube Channel Screenshots' }
      </Typography>
    </React.Fragment>
  );
}

export default Info;
