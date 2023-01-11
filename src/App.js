import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ForwardRefParentInput from './components/AdvancedReact/Refs/ForwardRefParentInput';
// import FocusInput from './components/AdvancedReact/Refs/FocusInput';
// import Input from './components/AdvancedReact/Refs/Input';
// import PureComponent from './components/AdvancedReact/PureComponents/PureComponent';
// import ParentComponent from './components/AdvancedReact/PureComponents/ParentComponent';
// import RefsDemo from './components/AdvancedReact/Refs/RefsDemo';
// import Table from './components/AdvancedReact/Fragments/Table';
// import FragmentDemo from './components/AdvancedReact/Fragments/FragmentDemo';
// import LifeCycleA from './components/LifeCycle/LifeCycleA';
// import Form from './components/forms/Form';
// import StyleSheet from './components/StyleSheets/StyleSheet';
// import InlineStyleSheet from './components/StyleSheets/InlineStyleSheet';
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import NameLists from './components/Lists/NameLists';
// import UserGreeting from './components/ConditionalRendering/UserGreeting';
// import FunctionClick from './components/events/FunctionClick';
// import ClassClick from './components/events/ClassClick';
// import EventBind from './components/events/EventBind';
// import ParentComponent from './components/ParentChild/ParentComponent';
// import Counter from './components/state/Counter';
// import FunctionalComponent from './components/FunctionComponent';
// import ClassComponent from './components/ClassComponent';
// import Hello from './components/Hello';
// import SetState from './components/state/SetState';

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

class App extends Component {
  render() {
    return(
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <FunctionalComponent name="Ashwin" heroName='Dad'>
          <p>This is children tag</p>
        </FunctionalComponent>
        <FunctionalComponent name="Ronaldo" heroName='Mom'>
          <button id='submit'>SUBMIT</button>
        </FunctionalComponent>
        <FunctionalComponent name="Alex Ferguson" heroName='Brother'/> */}

        {/* <ClassComponent name="Ronaldo" team='Man UTD'/>
        <ClassComponent name="Haaland" team='Man City'>
          <p>Children Cristiano JR</p>
        </ClassComponent>
        <ClassComponent/> */}
        {/* <Hello/>  */}
        {/* <SetState/> */}
        {/* <Counter init="2"></Counter> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameLists/> */}
        {/* <StyleSheet primary={true}/> */}
        {/* <InlineStyleSheet/>
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form/> */}
        {/* <LifeCycleA></LifeCycleA> */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}
        {/* <PureComponent/> */}
        {/* <ParentComponent/> */}
        {/* <RefsDemo/> */}
        {/* <Input/> */}
        {/* <FocusInput/> */}
        <ForwardRefParentInput/>
      </div>
    )
  }
}

export default App;
