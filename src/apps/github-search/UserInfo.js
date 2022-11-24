import React from 'react';

const UserInfo = ({ bio }) => {
  let userInfo;
  let date = new Date(bio.created_at);
  let formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  if (bio) {
    userInfo = (
      <div className="card">
        <div className="card-header">
            <strong>{bio.name}</strong>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4">
              <img className="img-fluid" src={bio.avatar_url} alt={bio.name} />
              <a className="btn btn-info btn-block mt-3 mb-3"
                target="_blank"
                rel="noreferrer"
                href={bio.html_url}>View Profile</a>
            </div>
            <div className="col-sm-8">
              <div className="stats mb-3">
                <span className="badge bg-primary me-1">
                  {bio.public_gists} Public Gists
                </span>
                <span className="badge bg-secondary me-1">
                  {bio.public_repos} Public Repos
                </span>
                <span className="badge bg-success me-1">
                  {bio.following} Following
                </span>
                <span className="badge bg-danger me-1">
                  {bio.followers} Followers
                </span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Username: </strong> {bio.login}
                </li>
                <li className="list-group-item">
                  <strong>Location: </strong> {bio.location}
                </li>
                <li className="list-group-item">
                  <strong>Bio: </strong> {bio.bio}
                </li>
                <li className="list-group-item">
                  <strong>Member Since: </strong> {formattedDate}
                </li>
                <li className="list-group-item">
                  <strong>Blog: </strong> {bio.blog}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="row">
        <div className="col-12 mt-3 mb-3">
          {userInfo}
        </div>
      </div>
    </>
  )
}

export default UserInfo;