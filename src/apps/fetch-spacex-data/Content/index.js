import React from 'react';
import './style.scss';

const Content = ({data}) => {
  return (
    <>
      <div className="content">
        {data.length <= 0 ? <p>Sorry, there is no data available.</p> :
        data.map((item, index) => (
          <div className="item" key={index}>
            <div className="item-image">
              <img src={item.links ? item.links.mission_patch : ''} alt="mission" />
            </div>
            <div className="item-meta">
              <p className="item-meta-title">{item.mission_name}</p>
              <p>Launch Year: {item.launch_year}</p>
              <p>Successful Launch: {item.launch_success ? 'true' : 'false'}</p>
              <p>Successful Landing: {item.rocket.first_stage.cores[0].land_success ? 'true' : 'false'}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Content