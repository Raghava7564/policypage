
import React from 'react';
import { Box, Button, Tab, Tabs } from '@mui/material';

const PolicyPage = () => (
  <Box sx={ padding: '20px' }>
    <Tabs value={0}><Tab label="Policy Details" /><Tab label="Billing/Misc" /><Tab label="Insured Detail" /><Tab label="Agent Detail" /></Tabs>
    <div role="tabpanel">{/* Tab Content */}</div>
    <div role="tabpanel">{/* Tab Content */}</div>
    <div role="tabpanel">{/* Tab Content */}</div>
    <div role="tabpanel">{/* Tab Content */}</div>
    <Button color="primary" onClick={() => { /* submit */ }}>Next</Button>
    <Button color="primary" onClick={() => { /* submit */ }}>OK</Button>
    <Button color="primary" onClick={() => { /* submit */ }}>Cancel</Button>
  </Box>
);

export default PolicyPage;
