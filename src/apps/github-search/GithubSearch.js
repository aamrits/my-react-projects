import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '../../components/Container/Container';
import UserSearchInput from './UserSearchInput';
import UserInfo from './UserInfo';
import UserReposInfo from './UserReposInfo';

const URL = `https://api.github.com/users`;
const CLIENT_ID = `fcfe0dcafe4d3c4778b9`;
const CLIENT_SECRET = `a662acb2f90ba2d71f23be8f6dc8d16ee70be070`;

const GithubSearch = () => {
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [repos, setRepos] = useState('');

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  }

  useEffect(() => {
    if (userName !== '') {
      const getBio = async () => {
        const { data } = await axios.get(`${URL}/${userName}?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}`);
        setBio(data);
      }
    
      const getRepos = async () => {
        const { data } = await axios.get(`${URL}/${userName}/repos?client_id=${CLIENT_ID}&&client_secret=${CLIENT_SECRET}&per_page=8&sort=updated`);
        setRepos(data);
      }
      
      getBio();
      getRepos();
    }
  }, [userName]);

  return (
    <>
      <Container>
        <h2 className="main-title">Github Search</h2>
        <UserSearchInput
          onChange={onChangeHandler}
        />

        <UserInfo
          bio={bio}
        />

        <UserReposInfo
          bio={bio}
          repos={repos} />
      </Container>
    </>
  )
}

export default GithubSearch;