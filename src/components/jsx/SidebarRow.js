import React from 'react'
import '../style/sidebarRow.css'

export default function SidebarRow(props) {
  return (
    <div className="sidebarRow">
      <h1 className="icon">{props.icon}</h1>
      <h1 className="title">{props.title}</h1>
    </div>
  )
}
