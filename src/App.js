import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.components.jsx'

class App extends Component {
   constructor(){
      super();
      
      this.state = {
         text:'Hullo',
         monsters:[],
         searchField:''
      }
   }
   
   componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}))
   }
   
   handleChange = e => this.setState({ searchField: e.target.value })
   
   render(){
      return (
          <div className='App'>
            <h1>Le Monsters</h1>
            <SearchBox placeholder='Filter results' handleChange={this.handleChange} />
            <CardList monsters={
               this.state.monsters.filter(
                  d => 
                     d.name
                      .toLowerCase()
                      .includes(this.state.searchField.toLowerCase())
               )
            }></CardList>
          </div>
        );
      
   }
}

export default App;
