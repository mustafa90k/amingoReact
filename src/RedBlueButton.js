// import React , {useState} from 'react'; // add a state to the component

// const RedBlueButton =()=>{


//     // add a state to RedBlueButton component 

//     const [state, setState ]= useState(
//      {
//          label :"Blue",
//          btnClass:"btn-primary"
//      })  //returns an array ["..",()=>{..}]
    
//     const changeColor =()=>{
//         if(state.label==="Blue"){
//             setState({label:"Red", btnClass:"btn-danger"})
//         }else {
//             setState({label:"Blue", btnClass:"btn-primary"})
//         }
      
//     }

// return (

// <button  onClick={changeColor} 
// className={`btn ${state.btnClass} `}>
//     {state.label}
// </button>

// )};

// export default RedBlueButton;

// import React from 'react';// for showing alert on click

// const RedBlueButton = () => {

//     const saySomething = () => {
//         alert("This is Red Blue Button")
//     }

//     return (
//         <button onClick={saySomething} className="btn btn-primary">
//             Click Me
//         </button>
//     )
// }

// export default RedBlueButton;