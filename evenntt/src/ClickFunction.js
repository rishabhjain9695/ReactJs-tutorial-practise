
// import './App.css';
// import React from 'react'

// export default class ClickFunction extends Component {
//     Hello(){
//         alert("rishabh");
//     }
//   render() {
//     return (
//         <div className='App'>
//         <input type="button" value="Click here bb" onClick={this.Hello} />
//       </div>
//     )
//   }
// // }
// export default function Click(props) {
//     const Hello=(name)=>{
//         alert("Hello " +props.name);
//     }
//   return (
//     <div className='App'>
//       <input type="button" value="Click here " onClick={()=>Hello(props.name)} />
//     </div>
//   )}
//  

import React, { Component } from 'react'
import './App.css';

export default class Click extends Component {
  render() {
    const Hello=(name)=>{
        alert(name);
    }
    return (
      <div>
        <input type="button" value="Click hereee" onClick={()=>Hello(this.props.name)}/>
      </div>
    )
  }
}

