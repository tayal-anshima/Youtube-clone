import React from 'react'
import '../style/videorow.css';
import Avatar from '@mui/material/Avatar';
export default function VideoRow(props) {
  return (
    <div className="VideoRow">
       <img className="thumbnail" alt="" src={props.img}/>
       <div className="content">
         <p className="title">{props.title}</p>
         <p className="viewsNtime">{props.views}.{props.timespan}</p>
         <div className="channel">
            <Avatar alt="" className="avatar" src={props.avatar}/>
            <p className="name">{props.channel}</p>
         </div>
         <div className="description">{props.description}</div>
       </div>
    </div>
  )
}
