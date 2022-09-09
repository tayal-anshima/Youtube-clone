import React from 'react'
import '../style/SearchPage.css';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import img1 from '../../assets/searchPage1.png';
import img2 from '../../assets/searchPage2.png';
import img3 from '../../assets/searchPage3.png';
import img4 from '../../assets/searchPage4.png';
import img5 from '../../assets/searchPage5.png';
import img6 from '../../assets/searchPage6.png';
import av1 from '../../assets/SP-av1.png';
import av2 from '../../assets/SP-av2.jpg';
import av3 from '../../assets/SP-av3.jpg';
import av4 from '../../assets/SP-av4.jpg';
export default function SearchPage() {
  return (
    <div className="searchPage">
      
      <div className="filter">
          <TuneOutlinedIcon className="filtericon"/>
          <h5>FILTERS</h5>
      </div>
      <hr/>
      <VideoRow
      img={img1}
      title="Complete ReactJs Online Certification Course|#webdeveloper WsCube Tech"
      views="1.2k views"
      timespan="3 months ago"
      avatar={av1}
      channel="Wscube Tech"
      description="Advanced REACT JS CERTIFICATION COURSE[2022]"/>
       <VideoRow
      img={img2}
      title="Complete ReactJs Online Certification Course|#webdeveloper WsCube Tech"
      views="1k views"
      timespan="2 months ago"
      avatar={av2}
      channel="Newton School"
      description="Advanced REACT JS CERTIFICATION COURSE[2022]"/>
       <VideoRow
      img={img3}
      title="Complete ReactJs Online Certification Course|#webdeveloper WsCube Tech"
      views="1.6k views"
      timespan="2 years ago"
      avatar={av3}
      channel="Thappa Technical"
      description="Advanced REACT JS CERTIFICATION COURSE[2022]"/>
       <VideoRow
      img={img4}
      title="Complete ReactJs Online Certification Course|#webdeveloper WsCube Tech"
      views="2m views"
      timespan="5 months ago"
      avatar={av3}
      channel="Thappa Technical"
      description="Advanced REACT JS CERTIFICATION COURSE[2022]"/>
       <VideoRow
      img={img5}
      title="Complete ReactJs Online Certification Course|#webdeveloper WsCube Tech"
      views="2.8k views"
      timespan="7 months ago"
      avatar={av3}
      channel="Thappa Technical"
      description="Advanced REACT JS CERTIFICATION COURSE[2022]"/>
       <VideoRow
      img={img6}
      title="Complete ReactJs Online Certification Course|#webdeveloper WsCube Tech"
      views="8k views"
      timespan="7 months ago"
      avatar={av4}
      channel="CodeWithHarry"
      description="Advanced REACT JS CERTIFICATION COURSE[2022]"/>
    </div>
  )
}
