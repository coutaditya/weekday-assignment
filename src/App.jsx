import { useEffect, useState } from 'react';
import './App.css';
import JobCard from './components/JobCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid } from '@mui/material';

function App() {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "limit": 9,
      "offset": offset
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        setJobs(prevJobs => [...prevJobs, ...data.jdList]);
        setOffset(prevOffset => prevOffset + 9);

        if (data.jdList.length === 0) {
          // No more jobs to fetch
          setHasMore(false);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchJobs}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more jobs to load</p>}
        scrollThreshold={0.9}
      >
        <Grid container spacing={2} justifyContent="center">
          {jobs.map((job, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}

export default App;
