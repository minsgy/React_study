import React from 'react';

function Movie(){
  return <h1>ㅎㅇㄹ</h1>
}

function App() {
  return ( 
  <div>
    <div>Hello!</div> 
    {/* div class="action" */}
    <Movie 
    name="action" 
    something={true}/> 
  </div>
  );
}

export default App;
