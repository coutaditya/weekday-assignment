import { Box, Grid, TextField } from '@mui/material';
import Filter from './Filter';
import { useEffect, useState } from 'react';
import { ROLE_OPTIONS } from '../constants/constants';
import { NUMBER_OF_EMPLOYEES_OPTIONS } from '../constants/constants';
import { EXPERIENCE_OPTIONS } from '../constants/constants';
import { MODE_OPTIONS } from '../constants/constants';
import { MIN_SALARY_OPTIONS } from '../constants/constants';

export function Filters({ filters, setFilters }) {

    const [role, setRole] = useState([])
    const [numberOfEmployees, setNumberOfEmployees] = useState([])
    const [experience, setExperience] = useState([])
    const [mode, setMode] = useState([])
    const [minimumSalary, setMinimumSalary] = useState([])
    const [companyName, setCompanyName] = useState('')

    useEffect(()=> {
        setFilters({
            role: role,
            numberOfEmployees: numberOfEmployees,
            experience: experience,
            mode: mode,
            minimumSalary: minimumSalary,
            companyName: companyName
        })
    }, [role, numberOfEmployees, experience, mode, minimumSalary, companyName])
    
  
    return (
      <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={ROLE_OPTIONS} placeholder="role" label="Roles" onChange={setRole}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={NUMBER_OF_EMPLOYEES_OPTIONS} placeholder="numberOfEmployees" label="Number of Employees" onChange={setNumberOfEmployees}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={EXPERIENCE_OPTIONS} placeholder="experience" label="Experience" onChange={setExperience}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={MODE_OPTIONS} placeholder="mode" label="Mode" onChange={setMode}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={MIN_SALARY_OPTIONS} placeholder="minimumSalary" label="Minimum Base Pay Salary" onChange={setMinimumSalary}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <TextField fullWidth id="companyName" label="Search Company Name" variant="outlined" onChange={(event) => {
                setCompanyName(event.target.value)
            }}/>
          </Grid>
        </Grid>
      </Box>
    );
  }
  
