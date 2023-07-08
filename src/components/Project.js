import React from 'react';

export default function Project(props) {
  return (
    <div>
      <div>{props.name}</div>
      <img src={props.src} href={props.link} alt='projectPhoto'></img>
    </div>
  );
}
