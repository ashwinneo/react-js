import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Container } from './components/Props/Advanced Props/Style/Container';
// import { Status } from './components/Props/Advanced Props/Status';
// import { Heading } from './components/Props/Advanced Props/Heading';
// import { Oscar } from './components/Props/Advanced Props/Oscar';
// import { Greet1 } from './components/Props/Advanced Props/Greet1';
// import { Button } from './components/Props/Advanced Props/Event/Button';
// import { Input } from './components/Props/Advanced Props/Event/Input';
// import { Greet } from './components/Props/Greet';
import { Person } from './components/Props/Person';
import { PersonList } from './components/Props/PersonList';

function App() {
  const personName = {
    first: 'Cristiano',
    last: 'Ronaldo '
  };

  const nameList = [
    {
      first: 'Cristiano',
      last: 'Ronaldo'
    },
    {
      first: 'David',
      last: 'Beckam'
    },
    {
      first: 'Frank',
      last: 'Lampard'
    }
  ];
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Greet name='Ashwin' messageCount={20} isLoggedIn={true} />*/}
      <Person name={personName} />
      <PersonList names={nameList}/> 
      {/* <Status status='success'/>
      <Heading>Header</Heading>
      <Oscar>
        <Heading>Oscar goes to Ashwin Ramakrishnan</Heading>
      </Oscar>
      <Greet1 name='Ashwin' isLoggedIn={true} /> */}
      {/* <Button handleClick={()) => {
        console.log('Button Clicked', event);
      }}/> */}
      {/* <Button handleClickEvent={(event, id) => {
        console.log('Button Clicked Event', event, id);
      }}/>
      <Input value="" handleChange={(event) => {
        console.log(event.target.value);
      }}/> */}
      {/* <Container styles={{ border: '2px solid #909ece', padding: '1rem' }}/> */}
    </div>
  );
}

export default App;
