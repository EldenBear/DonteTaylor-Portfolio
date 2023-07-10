import React from 'react';

export default function Project(props) {
  return (
    <div className='project'>
      <div>{props.name}</div>
      <a href={props.link}>
        <img src={props.src} href={props.link} alt='projectPhoto'>
        </img> 
      </a>
    </div>
  );
}
