import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function JobCard({ jobData }) {
  const getInitials = (name) => name.charAt(0).toUpperCase();

  const capitalizeFirstLetter = (string) => {
    if(string){
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
  }

  const gradientTextStyle = {
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)', 
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '6.0em',
    lineHeight: '1.2em'
  };

  return (
    <Card sx={{
      maxWidth: 345,
      borderRadius: '16px',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.12)',
      mb: 2,
      ml: 2
    }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            Posted 6 days ago
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{
            width: 40,
            height: 40,
            bgcolor: 'primary.main',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%'
          }}>
            {getInitials(jobData.jobRole)}
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {capitalizeFirstLetter(jobData.companyName) || 'Company Name'}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
              {capitalizeFirstLetter(jobData.jobRole) || 'Job Title'}
            </Typography>
            <Typography color="text.secondary">
              {capitalizeFirstLetter(jobData.location) || 'Location'}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ mb: 2 }}>
          Estimated Salary: {jobData.minJdSalary ? `₹${jobData.minJdSalary} - ₹${jobData.maxJdSalary} LPA` : 'x'}
        </Typography>
        <Typography sx={{ fontWeight: 'bold', mb: 2 }}>
          About Company:
        </Typography>
        <Typography variant="body2" style={gradientTextStyle}>
          {jobData.jobDetailsFromCompany.substring(0, 500)}
        </Typography>
        <Button
          variant="text"
          color="primary"
          href={jobData.jdLink}
          target="_blank"
          rel="noopener"
          sx={{
            mt: 1,
            width: '100%',
            justifyContent: 'center',
            textTransform: 'none' 
          }}
        >
          View job
        </Button>
        <Typography sx={{ mb: 2 }}>
          Minimum Experience: {jobData.minExp || 'x'} years
        </Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 1, textTransform: 'none' }}>
          Easy apply
        </Button>
        <Button variant="contained" color="secondary" fullWidth sx={{ textTransform: 'none' }}>
          Unlock referral asks
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
