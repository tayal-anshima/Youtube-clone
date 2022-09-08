import React from 'react'
import Avatar from '@mui/material/Avatar';
import '../style/VideoCard.css'
export default function VideoCard(props) {
  return (
    <div className="VideoCard">
      <img className="VideoCard_thumbnail" src={props.video_img} alt=""/>
      <div className="Video_info">
        <Avatar  className="video_avatar" alt=""src={props.avatar}/>
        <div className="video_text">
          <h4>
          {props.video_title}
          </h4>
          <p>{props.channel}</p>
          <p className="viewNtimespan">
          {props.views} . {props.timespan}
          </p>
        </div>
      </div>
      
    </div>
  )
}


