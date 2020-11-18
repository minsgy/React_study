import React from 'react';

function Movie(props){
  console.log(props);
return <h1>나는야 {props.name} 가면이지롱</h1>
}

function App() {
  return ( 
  <div>
    <div>Hello!</div> 
    {/* div class="action" */}
    <Movie 
      name="action" 
      something={true}
      values={["hello", 1,2,3,4,5]}/> 
  </div>
  );
}

export default App;
