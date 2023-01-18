import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';//createContext, useReducer, createContext, Component
import APIV4 from './ReactHooks/rest-api-calls/APIV4/APIV4';
// import APIV3 from './ReactHooks/rest-api-calls/APIV3/APIV3';
// import APIV1 from './ReactHooks/rest-api-calls/APIV1';
// import APIV2 from './ReactHooks/rest-api-calls/APIV2';
// import ParentComponent from './ReactHooks/components/UseCallback/ParentComponent';
// import UseReduceDataFetching from './ReactHooks/components/UseReducers/DataFetch/UseReduceDataFetching';
// import DataFetchingOne from './ReactHooks/components/UseReducers/DataFetch/UseEffectUseStateDataFetchingOne';

// import ComponentC from './ReactHooks/components/UseReducerWithUseContext/ComponentC';
// import ComponentB from './ReactHooks/components/UseReducerWithUseContext/ComponentB';
// import ComponentA from './ReactHooks/components/UseReducerWithUseContext/ComponentA';

// export const CountContext = createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   console.log("State", state)
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// };


// import CounterThree from './ReactHooks/components/UseReducers/CounterThree';
// import CounterTwo from './ReactHooks/components/UseReducers/CounterTwo';
// import CounterOne from './ReactHooks/components/UseReducers/CounterOne';
// import ComponentC from './ReactHooks/components/UseContext/ComponentC';

// export const UserContext = createContext();
// export const ChannelContext = createContext();

// import DataFetching from './ReactHooks/components/UseHookFetch/DataFetching';
// import UseIntervalHookCounter from './ReactHooks/components/UseEffect/UseIntervalHookCounter';
// import ClassIntervalCounter from './ReactHooks/components/UseEffect/ClassIntervalCounter';
// import UseMouseContainer from './ReactHooks/components/UseEffect/UseMouseContainer';
// import ClassMouse from './ReactHooks/components/UseEffect/ClassMouse';
// import UseHookMouse from './ReactHooks/components/UseEffect/UseHookMouse';
// import HookCounter1 from './ReactHooks/components/UseEffect/UseCounterInteger';
// import ClassCounter1 from './ReactHooks/components/UseEffect/ClassCounter1';
// import HookCounter4 from './ReactHooks/components/UseState/UseStateArray';
// import HookCounterThree from './ReactHooks/components/UseState/HookCounterThree';
// import ClassCounter from './ReactHooks/components/UseState/ClassCounter';
// import HookCounterTwo from './ReactHooks/components/UseState/HookCounterTwo';
// import PostForm from './components/AdvancedReact/HTTP/PostForm';
// import PostList from './components/AdvancedReact/HTTP/PostList';
// import ComponentC from './components/AdvancedReact/Context/ComponentC';
// import { UserProvider } from './components/AdvancedReact/Context/UserContext';
// import ClickCounterTwo from './components/AdvancedReact/RenderProps/ClickCounterTwo';
// import HoverCounterTwo from './components/AdvancedReact/RenderProps/HoverCounterTwo';
// import User from './components/AdvancedReact/RenderProps/User';
// import Counter from './components/AdvancedReact/RenderProps/Counter';
// import ClickCounter from './components/AdvancedReact/HigherOrderComponent/ClickCounter';
// import HoverCounter from './components/AdvancedReact/HigherOrderComponent/HoverCounter';
// import Hero from './components/AdvancedReact/ErrorHandling/Hero';
// import ErrorBoundary from './components/AdvancedReact/ErrorHandling/ErrorBoundary';
// import PortalDemo from './components/AdvancedReact/Portals/PortalDemo';
// import ForwardRefParentInput from './components/AdvancedReact/Refs/ForwardRefParentInput';
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
//   // const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     // <CountContext.Provider
//     //   value={{ countState: count, countDispatch: dispatch }}
//     // >
//       <div className="App">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <header className="App-header">
//         </header> */}
//         {/* Count - {count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC /> */}
//         {/* <DataFetchingOne/> */}
//         {/* <UseReduceDataFetching/> */}
//         {/* <ParentComponent/> */}
//       </div>
//     // </CountContext.Provider>
//   );
// }

class App extends Component {
  render() {
    return (
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
        {/* <ForwardRefParentInput/>/ */}
        {/* <PortalDemo/> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}
        {/* <ClickCounter name='Ashwin'/>
        <HoverCounter/> */}
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render={(isLoggedIn) =>  isLoggedIn? 'Ashwin' : 'Guest'}/> */}
        {/* <Counter render={ (count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}/>

        <Counter render={ (count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}/> */}
        {/* <UserProvider value='Ashwin'>
          <ComponentC />
        </UserProvider> */}
        {/* <PostList/> */}
        {/* <PostForm/> */}


        {/* REACT HOOKS */}
        {/* <ClassCounter/>*/}
        {/*<HookCounterTwo/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounter4/> */}
        {/* <ClassCounter1/> */}
        {/* <HookCounter1/> */}
        {/* <ClassMouse/> */}
        {/* <UseHookMouse/> */}
        {/* <UseMouseContainer/> */}
        {/* <ClassIntervalCounter/>
          <UseIntervalHookCounter/> */}
        {/* <DataFetching/> */}
        {/* <UserContext.Provider value="Ashwin">
          <ChannelContext.Provider value="Ronaldo">
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}

        {/* <APIV1/> */}
        {/* <APIV2/> */}
        {/* <APIV3/> */}
        <APIV4/>
        {/* REACT HOOKS */}
      </div>
    )
  }
}

export default App;
