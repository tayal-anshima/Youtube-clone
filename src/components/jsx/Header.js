import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import img from '../../assets/youtube.webp';
import avatar from '../../assets/myPic.jpeg';
import '../style/Header.css';
import { Link } from 'react-router-dom';
//because of ES7 snippets extention 

export default function Header() {
  const[inputSearch,setInputSearch]=useState("");
  return (
    <div className="header">
       <div className="header_left">
         <MenuIcon/>
         <Link to="/">
         <img className="logo" alt="youtube logo" src={img}/>
         </Link>
         
      </div>
      
      <div className="header_center">
         {/*for search bar and icon*/}
         <input value={inputSearch} 
         onChange={(e)=>setInputSearch(e.target.value)}
         className="header_searchbar" placeholder="Search //only render page for {react js} search" type="text" />
         <Link to={`/search/${inputSearch}`}>
         <SearchIcon className='header_button'/>
         </Link>
        
      </div>

      <div className="header_right">
         <VideoCallIcon className="header_rightIcons"/>
         <AppsIcon className="header_rightIcons"/>
         <NotificationsIcon className="header_rightIcons"/>
         <Avatar
          className="header_rightIcons"
          alt="my image"
          src={avatar}
         />
      </div>
      

    </div>
  )
}
