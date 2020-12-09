import React, { Component } from 'react';
import ItemOfList from './ItemOfList';
import request from './request';

export default class ListTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: true,
    };
  }
  async componentDidMount() {
    const list = await request(this.props.url, this.props.token);
    this.setState({
      isLoading: false,
      list: list.teams,
    });
  }
  render() {
    return this.state.isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <div>
        <h2>Teams</h2>
        <ul>
          {this.state.list.map((item) => (
            <ItemOfList
              onClick={this.props.handleClickTeam}
              key={item.id}
              id={item.id}
              value={item.name}
            />
          ))}
        </ul>
      </div>
    );
  }
}
