import React from 'react';

const UserSearchInput = ({onChange}) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <input type="text"
            className="form-control"
            placeholder="Enter your GitHub user_name"
            name="username"
            onChange={onChange} 
          />
        </div>
      </div>
    </>
  )
}

export default UserSearchInput;