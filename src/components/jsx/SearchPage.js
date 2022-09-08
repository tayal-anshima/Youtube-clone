import React from 'react'
import '../style/SearchPage.css';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
export default function SearchPage() {
  return (
    <div className="searchPage">
      
      <div className="filter">
          <TuneOutlinedIcon className="filtericon"/>
          <h5>FILTERS</h5>
      </div>
      <hr/>
      <VideoRow/>
    </div>
  )
}
