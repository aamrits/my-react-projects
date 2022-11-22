import React from 'react';
import './index.scss';

const YEARS = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

const showLaunchBasedonYear = (year) => {
  showLaunchBasedonYear(year)
}

const showSuccessLaunch = (value) => {
  showSuccessLaunch(value)
}

const showSuccessLanding = (value) => {
  showSuccessLanding(value)
}

const Sidebar = ({showLaunchBasedonYear, showSuccessLaunch, showSuccessLanding}) => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-filter">
          <h4 className="sidebar-title">Launch Year</h4>
          <ul className="sidebar-buttons-years">
            {YEARS.map((year, index) => (
              <li key={index}>
                <button className="sidebar-btn" onClick={() => showLaunchBasedonYear(year)}>{ year }</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-filter">
          <h4 className="sidebar-title">Successful Launch</h4>
          <div className="sidebar-buttons">
            <button className="sidebar-btn" onClick={() => showSuccessLaunch('true')}>True</button>
            <button className="sidebar-btn" onClick={() => showSuccessLaunch('false')}>False</button>
          </div>
        </div>
        
        <div className="sidebar-filter">
          <h4 className="sidebar-title">Successful Landing</h4>
          <div className="sidebar-buttons">
            <button className="sidebar-btn" onClick={() => showSuccessLanding('true')}>True</button>
            <button className="sidebar-btn" onClick={() => showSuccessLanding('false')}>False</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar