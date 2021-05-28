import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

function App(){
    
  const [input,setInput] = useLocalStorage('name','')

  return(
  <div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
  </div>
  )
}
export default App;
