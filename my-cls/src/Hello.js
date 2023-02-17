import React from 'react';
function Hello(props){
    return(
  <header>
       <h1>welcome {props.name}</h1>
        <h1>welcome {props.age}</h1>
        {props.children}
        <Mycls/>
  </header>
    );
}
 function Mycls(){
  return(
    <header> <h1> tanyagarg</h1> </header>
     );
}
export default Hello;