import { Box, Grid, TextField } from '@mui/material';
import Filter from './Filter';
import { useEffect, useState } from 'react';

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
            <Filter options={[
                { "label": "Backend", "id": "1" },
                { "label": "Frontend", "id": "2" },
                { "label": "Fullstack", "id": "3" },
                { "label": "Android", "id": "5" },
                { "label": "IOS", "id": "6" },
                { "label": "Flutter", "id": "7" },
                { "label": "Tech Lead", "id": "8" },
                { "label": "Dev-Ops", "id": "9" },
                { "label": "Data Science", "id": "10" }
            ]} placeholder="role" label="Roles" onChange={setRole}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={[
                { "label": "1-10", "id": "1" },
                { "label": "11-20", "id": "2" },
                { "label": "21-50", "id": "3" },
                { "label": "51-100", "id": "4" },
                { "label": "101-200", "id": "5" },
                { "label": "201-500", "id": "6" },
                { "label": "500+", "id": "7" }
            ]} placeholder="numberOfEmployees" label="Number of Employees" onChange={setNumberOfEmployees}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={[
        {
            "label": "1",
            "id": "1"
        },
        {
            "label": "2",
            "id": "2"
        },
        {
            "label": "3",
            "id": "3"
        },
        {
            "label": "4",
            "id": "4"
        },
        {
            "label": "5",
            "id": "5"
        },
        {
            "label": "6",
            "id": "6"
        },
        {
            "label": "7",
            "id": "7"
        },
        {
            "label": "8",
            "id": "8"
        },
        {
            "label": "9",
            "id": "9"
        },
        {
            "label": "10",
            "id": "10"
        }
      ]} placeholder="experience" label="Experience" onChange={setExperience}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={[
                { "label": "Remote", "id": "1" },
                { "label": "Hybrid", "id": "2" },
                { "label": "In-office", "id": "3" }
            ]} placeholder="mode" label="Mode" onChange={setMode}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Filter options={[
            {
                "label": "0L",
                "id": "1"
            },
            {
                "label": "10L",
                "id": "2"
            },
            {
                "label": "20L",
                "id": "3"
            },
            {
                "label": "30L",
                "id": "4"
            },
            {
                "label": "40L",
                "id": "5"
            },
            {
                "label": "50L",
                "id": "6"
            },
            {
                "label": "60L",
                "id": "7"
            },
            {
                "label": "70L",
                "id": "8"
            }
        ]} placeholder="minimumSalary" label="Minimum Base Pay Salary" onChange={setMinimumSalary}/>
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
  
