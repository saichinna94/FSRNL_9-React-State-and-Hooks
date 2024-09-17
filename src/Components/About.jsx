import React from 'react'

const About = ({myobj, title}) => {
    
  return (
    <>
    <h3> {title} </h3>
    <p>
        {myobj.name} is {myobj.age} years old! and leaving in {myobj.city}
    </p>
    </>
  )
}

export default About
