import React from 'react';
import P from './Person';
function House(){
    let friends=["rishabh","tanya","sancht"];
    return (
        <>
        <P name="aa" isMarried={false}arr={friends}/>
        <Apps/>
        </>
    );
}
function Apps(){
    return (
        <>
        <h1>mohammad aki</h1>
        <h1>tanya garg</h1>
        <h1>hatssss i</h1>
        </>
    );
}
export default House;

