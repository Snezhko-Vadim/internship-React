import React from 'react';
export default function ItemOfList(props) {
  if (props.onClick) {
    return (
      <li onClick={props.onClick} id={props.id}>
        {props.value}
      </li>
    );
  } else {
    return <li id={props.id}>{props.value}</li>;
  }
}
