import { createContext, useContext, useState } from 'react';
import './App.css';
import MainWrapper from './MainWrapper/MainWrapper';
import MainWrapperTwo from './MainWrapperTwo/MainWrapperTwo';

//default
export const myContext = createContext({
  name :'testdefault',
  id:0
});

export const authContext:any = createContext({
  isLogin:false,
  setFun:() => {}
});
 

function App() {

  const initialValue = {
    name:'test1122',
    id:1
  }

 const[loginState, setLoginState] = useState(false)

  return (
    <authContext.Provider value = {{isLogin:loginState, setFun: setLoginState}}>
    <myContext.Provider value = {initialValue}>
    
<div>
       
       {/* <MainWrapper/> */}

       <MainWrapperTwo setLoginState = {setLoginState}/>

      </div>

    </myContext.Provider>
    </authContext.Provider>
  );
}

export default App;
