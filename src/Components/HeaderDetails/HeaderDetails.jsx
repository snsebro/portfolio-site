import React from 'react'

export default function HeaderDetails(props) {
  const storage = localStorage.getItem('project')
  return (
    <>
      {props.project ?  props.project.name : storage}
    </>
  )
}
