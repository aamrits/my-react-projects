import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import Content from './Content';
import Sidebar from './Sidebar';
import Loader from '../../components/Loader/Loader';

const SPACEX_API = 'https://api.spaceXdata.com/v3/launches?limit=100';

const GetSpaceXData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async() => {
    try {
      const response = await fetch(SPACEX_API);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function showLaunchBasedonYear(year) {
    try {
      setLoading(true);
      const response = await fetch(`${SPACEX_API}&launch_year=${year}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  async function showSuccessLaunch(value) {
    try {
      setLoading(true);
      const response = await fetch(`${SPACEX_API}&launch_success=${value}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  async function showSuccessLanding(value) {
    try {
      setLoading(true);
      const response = await fetch(`${SPACEX_API}&launch_success=${value}&land_success=${value}`);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Container>
      <Sidebar
        showLaunchBasedonYear={showLaunchBasedonYear} 
        showSuccessLaunch={showSuccessLaunch}
        showSuccessLanding={showSuccessLanding}
      />
      { loading ? <Loader /> : <Content data={data} /> }
    </Container>
  )
}

export default GetSpaceXData