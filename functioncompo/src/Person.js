import React from 'react';
import PropTypes from 'prop-types'

function Person(props){
  
    return (
        <>
        <h1>welcome {props.name}</h1>
        <h1>welcome {props.age}</h1>
        <h1>welcome {props.isMarried.toString()}</h1>
        <h1>welcome {props.isMarried}</h1>
        <h1>welcome {String(props.isMarried)}</h1>
        <h1>{props.arr[0]}</h1>
        <h1>{props.arr[1]}</h1>
        <h1>{props.arr[2]}</h1>
        <h1>{props.arr[3]}</h1>
        <h1>{props.arr}</h1>
        </>
    );
}
export default Person;
Person.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
    arr:PropTypes.array
}
Person.defaultProps={
    name:'learning never gets easy',
    age:11
}