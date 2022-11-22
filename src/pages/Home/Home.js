import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

const appList = [
    {
        id: 1,
        app_name: "Get SpaceX Data",
        difficulty_level: "Medium",
        desc: "A simple application which fetches spaceX API data and displays based on rocket launches. We can also filter the rocket laucnhes based on year, successful launch and successful landing.",
        link: "fetch-spacex-data"
    },
    {
        id: 2,
        app_name: "GitHub Search",
        difficulty_level: "Medium",
        desc: "An application which uses GitHub API to fetch any GitHub Profile based on your Git username. We can see the author's bio and information about their repos.",
        link: "github-search"
    },
    {
        id: 3,
        app_name: "ToDo List",
        difficulty_level: "Easy",
        desc: "A simple implemention of CRUD operation. You can add a task, edit and delete the task. You can also clear all the tasks.",
        link: "todo-list"
    },
    {
        id: 4,
        app_name: "File Explorer",
        difficulty_level: "In Progress",
        desc: "",
        link: "file-explorer"
    },
    {
        id: 5,
        app_name: "Multi-step Form",
        difficulty_level: "In Progress",
        desc: "",
        link: "multi-step-form"
    }
]

const Home = () => {
  return (
    <section>
        <Container>
            <div className="card-container">
                {appList.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="card-body">
                            <h5 className="card-title">
                                { item.app_name }
                                <span className="badge bg-custom-badge">{ item.difficulty_level }</span> 
                            </h5>
                            <p className="card-text">{ item.desc }</p>
                            <Link to={"/" + item.link} className='btn btn-primary'>
                                Open <i className="bi bi-box-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}

export default Home;