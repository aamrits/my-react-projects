import React from 'react';

const UserReposInfo = ({ bio, repos }) => {
  let userReposInfo, userReposList;

  if (repos && bio) {
    userReposList = (
      repos.map(repo => (
        <li className="list-group-item" key={repo.id}>
          <div className="row">
            <div className="col-sm-9">
              <h5>
                <a href={repo.html_url} target="_blank">{repo.name}</a>
              </h5>
              <p className="m-0">{repo.description}</p>
              <p className="m-0">Last updated on
                {
                  ` ${new Date(repo.updated_at).getDate()}-${new Date(repo.updated_at).getMonth() + 1}-${new Date(repo.updated_at).getFullYear()}`
                }
              </p>
            </div>
            <div className="col-sm-3">
              <div className="stats">
                <span className="badge bg-primary me-1">Size: {repo.size} KB</span>
                <span className="badge bg-secondary">{repo.forks} Forks</span>
              </div>
            </div>
          </div>
        </li>
      )
    ))

    userReposInfo = (
      <div className="card">
        <div className="card-header">
          <strong>{bio.name}</strong>
        </div>
        <div className="card-body">
          <div className="row">
            <ul className="list-group">
              {userReposList}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="row">
        <div className="col-12 mt-3 mb-3">
          {userReposInfo}
        </div>
      </div>
    </>
  )
}

export default UserReposInfo;