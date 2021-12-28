import React,{useEffect,useState , createContext} from 'react';

// import StateTutorial from './StateTutorial'
// import UserReducerTutorial from './UserReducerTutorial'
// import UseEffectTutorial from './UseEffectTutorial'
// import UseRefTutorial from './UseRefTutorial';
// import UseLayoutEffectTutorial from './UseLayoutEffectTutorial';
// import ImperativeHandle from './ImperativeHandle';
// import Login from './Login';
// import User from './User';
// import UseMemoTutorial from './UseMemoTutorial';
// import RouterTutorial from './RouterTutorial';

import Profile from './components/Profile';
import Login from './components/Login';

export const loginContext=createContext(null);



const App = ()=> {

  const [username, setUsername]=useState('');

  return (
    <loginContext.Provider value={ {username, setUsername}}>
        {/* <StateTutorial /> */}
        {/* <UserReducerTutorial/> */}
        {/* <UseEffectTutorial /> */}

        {/* <UseRefTutorial/> */}
        {/* <UseLayoutEffectTutorial /> */}
        {/* <ImperativeHandle /> */}

      {/* <Login/>  <User/> */}
      {/* <UseMemoTutorial /> */}
        
      {/* <RouterTutorial /> */}

         <Profile /> 
        < Login/>
    </loginContext.Provider>
  );
}

export default App;
