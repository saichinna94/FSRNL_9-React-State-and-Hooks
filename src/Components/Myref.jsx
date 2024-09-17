import React, { useEffect, useRef } from 'react'

const Myref = () => {
    const nameRef=useRef(null);
    useEffect(()=>{
        nameRef.current.focus();
    })
    const sendData=()=>{
        let name=nameRef.current.value;
        if(name!=''){
            alert(name);
        }
        else{
            alert("Please fill the blank fields!");
        }
    }
  return (
    <>
        <h2>useRef Example</h2>
        Name : <input type='text' ref={nameRef}/> <br />
        <button onClick={sendData}>Click Here</button>
    </>
  )
}

export default Myref;
