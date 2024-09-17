import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Counter from './Components/Counter'
import Posts from './Components/Posts'
import Myref from './Components/Myref'
const App = () => {
  const title = "My About Page!";
  const obj = {name:"Sai Shankar Rapolu", age: 30, city: "Hyderabad"};
  return (
   <>
    <h2>App Component Example</h2>
    <p>Welcome to React JS!</p>
    <hr />
    <Myref />
    {/* <Posts /> */}
    {/* <Home />
    <hr />
    <Counter />
    <hr />
    < About myobj={obj} title={title} />
    <hr /> */}
   </>
  )
}

export default App
