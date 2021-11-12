import React, {Component} from 'react';
import {CardList} from './components/cardList/cardList.component.jsx';
import {SearchBox} from './components/searchBox/searchBox.component.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      monsters: [], 
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users})); 
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolex</h1>
         <SearchBox placeholder='placeholder' handleChange={this.handleChange}/>
         <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}


export default App;
