
import React from 'react';
import { Box, Button, Checkbox, Select, TextField } from '@mui/material';

const PolicyDetails = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Path ID" name="pathId" variant="outlined" required=true fullWidth=true placeholder="Enter Path ID" />
    <TextField label="Policy Number" name="policyNumber" variant="outlined" fullWidth=true disabled=true />
    <Select label="Risk Type" name="riskType" variant="outlined" fullWidth=true options=[] />
    <Checkbox name="isActive"  /> Is Active
    <Button color="primary" onClick={() => { /* navigate */ }}>Next</Button>
    <Button color="success" onClick={() => { /* submit */ }}>OK</Button>
    <Button color="error" onClick={() => { /* reset */ }}>Cancel</Button>
  </Box>
);

export default PolicyDetails;
