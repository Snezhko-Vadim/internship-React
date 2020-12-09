import './styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ListTeams from './ListTeams';
import ListPlayers from './ListPlayers';
import request from './request';

const urlOfCompetitionTeams = 'https://api.football-data.org/v2/competitions/2002/teams';
const token = '7d9c12f5860048e2b3a48176691a5ece';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSquadActive: false,
    };
  }
  handleClickTeam = async (event) => {
    let idOfTeam = event.target.id;
    this.team = await request(
      `https://api.football-data.org/v2/teams/${idOfTeam}`,
      this.props.token,
    );
    this.setState({
      isSquadActive: true,
    });
  };
  render() {
    if (this.state.isSquadActive) {
      console.log('render with list of players');
      return (
        <div className="app">
          <ListTeams
            url={this.props.urlOfCompetitionTeams}
            token={this.props.token}
            handleClickTeam={this.handleClickTeam}
          />
          <ListPlayers team={this.team} />
        </div>
      );
    } else {
      console.log('render without list of players');
      return (
        <div className="app">
          <ListTeams
            url={this.props.urlOfCompetitionTeams}
            token={this.props.token}
            handleClickTeam={this.handleClickTeam}
          />
        </div>
      );
    }
  }
}

ReactDOM.render(
  <App urlOfCompetitionTeams={urlOfCompetitionTeams} token={token} />,
  document.getElementById('root'),
);
