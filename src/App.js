import React, {useState} from 'react';

function App(){
    
  const [input,setInput] = useState('')

  return(
  <div>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
  </div>
  )
}
export default App;
