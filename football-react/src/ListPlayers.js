import React, { Component } from 'react';
import ItemOfList from './ItemOfList';

export default function ListPlayers(props) {
  let team = props.team;
  return (
    <div>
      <h2>Players of {team.name}</h2>
      <ul>
        {team.squad.map((item) => (
          <ItemOfList key={item.id} id={item.id} value={item.name} />
        ))}
      </ul>
    </div>
  );
}
