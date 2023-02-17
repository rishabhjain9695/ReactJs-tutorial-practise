
import React, { Component } from 'react'
// var bool=true;
export default class Statess extends Component {
    constructor(props){
        super(props);
        this.state={
        name:this.props.name,
        age:12,
        College:"Nsut"
        }
        this.changeName.bind(this);
    }
    changeName(){
        this.setState({
            name:"Rishabh Jain",
            age:23,
            College:"CCeT"
        })
    }
    // changeName2(){
    //     if(bool){
    //         bool=false;
    //     this.setState({
    //         name:"learning never gets Easy",
    //         age:12,
    //         sirname:"ansari"
    //     })
    // }
    // else{
    //     this.setState({
    //         name:"Rishu"
    //     })
    //     bool=true;
    // }
    // }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.College}</h1>
        <input type="button" value="Click" onClick={this.changeName()} />
        {/* <input type="button" value="Click" onClick={()=>this.changeName2()} /> */}
      </div>
    )
  }
}
