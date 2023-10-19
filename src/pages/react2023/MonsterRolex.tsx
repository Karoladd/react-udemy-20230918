import React, { Component } from 'react';

interface Monster {
  id: string;
  name: string;
}

interface State {
  monsters: Monster[];
}

class MonterRolex extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      monsters: [
        { id: '123', name: 'Linda' },
        { id: '321', name: 'Frank' },
        { id: '213', name: 'Andrei' },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Monster List</h1>
        <ul>
          {this.state.monsters.map((monster) => (
            <li key={monster.id}>{monster.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MonterRolex;
