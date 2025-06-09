
import React from 'react';
import { Box, Button, Checkbox, DatePicker, RadioGroup, Select, TextField } from '@mui/material';

const PolicyDetails = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Path ID" name="pathId" variant="outlined" required=true fullWidth=true placeholder="Enter Path ID" />
    <TextField label="Policy Number" name="policyNumber" variant="outlined" required=false fullWidth=true disabled=true />
    <Select label="Risk Type" name="riskType" variant="outlined" required=true fullWidth=true options=[] />
    <Checkbox name="isActive" color="primary" /> Active
    <RadioGroup name="policyStatus" row=true options=[{"label": "New", "value": "new"}, {"label": "Renewal", "value": "renewal"}] />
    <DatePicker label="Effective Date" name="effectiveDate" variant="outlined" required=true fullWidth=true format="MM/dd/yyyy" />
    <Button color="primary" onClick={() => { /* navigate */ }}>Next</Button>
    <Button color="success" onClick={() => { /* submit */ }}>OK</Button>
    <Button color="error" onClick={() => { /* reset */ }}>Cancel</Button>
  </Box>
);

export default PolicyDetails;
