import React  from 'react';

const person = (props) => {
    console.log(props);
    return (
        <div onClick={props.onclick}>
            <p>I am a Person</p>
            <p>My name is {props.name} and my age is {props.age}</p>
        </div>
    )
}
export default person;