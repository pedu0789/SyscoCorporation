import React, { Component } from 'react';
import Searchsubs from './components/Searchsubs';
import Item from './components/Item';
import Substitute from './components/Substitute';
import Submit from './components/Submit';
import './css/search.css';

class App extends Component {
  render() {
    return (
      <div>
        <Searchsubs />
        <Item />
        <Substitute />
        <div id='bigEmpty'></div>
        <Submit />
      </div>
    );
  }
}

export default App;
