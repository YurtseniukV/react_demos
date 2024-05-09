import React, {FC, useReducer} from 'react';
import './App.css';

interface CounterState{
count:number
}
interface  CounterAction{
  type:string,
  payload:number
}

const callbackReduser=(state:CounterState,action:CounterAction):CounterState=>{
  switch(action.type){
    case'inc':
      state.count+=action.payload;
      return {...state}
    case 'dec':
      state.count-=action.payload;
      return {...state}
    case 'res':
      state.count=action.payload;
      return {...state}
  }

return {count:0} /*початкове значення,або ж замість нього в світч кейс вкінці додати дефолтне значення*/
}
const App: FC = () => {

  const [state,dispatch ] = useReducer(callbackReduser, {count:0})
  
  
  
  return (
    <div>
<h2>{state.count}</h2>
      <button onClick={()=>{
        dispatch({type:'inc',payload:100})
      }}>inc</button>
      <button onClick={()=>{
        dispatch({type:'dec',payload:1})
      }}>dec</button>
      <button onClick={()=>{
        dispatch({type:'res',payload:0})
      }}>res</button>
    </div>
  );
}

export default App;
