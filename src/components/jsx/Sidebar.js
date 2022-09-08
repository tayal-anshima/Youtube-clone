import React from 'react'
import SidebarRow from './SidebarRow'
import '../style/sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <SidebarRow icon={<HomeOutlinedIcon/>}  title="Home"/>
      <SidebarRow  icon={<ExploreOutlinedIcon/>}title="Explore"/>
      <SidebarRow icon={< SubscriptionsOutlinedIcon/>} title="Subscription"/>
      <hr/>
     
      <SidebarRow icon={<VideoLibraryOutlinedIcon/>}  title="Library"/>
      <SidebarRow  icon={<RestoreOutlinedIcon/>}title="History"/>
      <SidebarRow icon={<OndemandVideoOutlinedIcon/>} title="Your videos"/>
      <SidebarRow icon={<WatchLaterOutlinedIcon/>} title="Watch Later"/>
      <SidebarRow icon={<ThumbUpOffAltOutlinedIcon/>} title="Liked Videos"/>
      <SidebarRow icon={<ExpandMoreOutlinedIcon/>} title="Show More"/>
      <hr/>

    </div>
  )
}
