import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  state = {
    person: [
      { id: 0, name: "Shefali", age: 18 },
      { id: 1, name: "Shivani", age: 18 },
      { id: 2, name: "Arpit", age: 21.4 }
    ],
    count: 0
  }
  removePerson = index => {
    const newPersonCopy = [...this.state.person];
    newPersonCopy.splice(index, 1);
    this.setState({ person: newPersonCopy });
  }
  render() {
    return (
      <div className="App">
        <h1> Hi I m React App </h1>
        {
          this.state.person.map((person, index) => {
            return <Person onclick={() => this.removePerson(index)} id={person.id} name={person.name} age={person.age} />
          })
        }
      </div>
    );
  }
}
export default App;
