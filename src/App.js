// import React,{useState} from 'react'

// const App = () => {
//   const [name, setname] = useState("rehan")
//   const [prevname, setPrevname] = useState("")
//   const [roll, setroll] = useState("101")
//   const [prevRoll, setprevroll] = useState("")
//   const [ inputText, setinputText] = useState("")
//   const [Text , showtext]=useState("teeeee")

  
//   const handlechange = (event) =>{
//     setinputText(event.target.value)

//   }
  
//   const handleclick = () => {
//     setPrevname(name);
//     setprevroll(roll)
//     setname("ahmad")
//     setroll("102")
//   }
//   const handleclick1 = () =>{
//     setname(prevname)
//     setroll(prevRoll)
//   }
//   const handleshow = ()=>{
//     showtext(inputText)

//   }
 
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h2>roll no: {roll}</h2>
      
//       <button type='button' onClick={handleclick}>next</button>
//       <button type='button' onClick={handleclick1}>redo</button>
//       <input type="text" onChange={handlechange} placeholder='enter an input' value={inputText} />

      
//       <button type='button' onClick={handleshow}>show text</button>
//       <h4>

//       {Text}
//       </h4>

//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [inputText, setInputText] = useState("")
//   const [roll, setRoll] = useState("")
//   const [name, setName] = useState("")
//   const [showText, setshowText] = useState("")
//   const [showName, setshowName] = useState("")
//   const [showroll, setshowroll] =useState("")



//   const handlechange1 =(event)=>{
//     setInputText(event.target.value)
//   }
//   const handlechange2 =(event)=>{
//     setRoll(event.target.value)
//   }
//   const handlechange3 =(event)=>{
//     setName(event.target.value)
//   }
//   const handleshow1 = () => {
//     setshowText(inputText)
//     setshowName(roll)
//     setshowroll(name)
//   }



  

//   return (
//     <div>
//       <input type="text" onChange={handlechange1} placeholder='enter an Text' value={inputText} /><br />
//       <input type="text" onChange={handlechange2} placeholder='enter an roll' value={roll} /><br />
//       <input type="text" onChange={handlechange3} placeholder='enter an name' value={name} /><br />
//       <button type='button' onClick={handleshow1}>show text</button>
//       <h2>{showText}</h2>
//       <h2>{showroll}</h2>
//       <h2>{showName}</h2>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [person, setPerson] = useState({})
  const [showPerson, setShowPerson] = useState({})


  const handlechange =(event)=>{
    setPerson(values=>({...values, [event.target.name]: event.target.value}));
    

  }
  const handleshow = () => {
    setShowPerson(person);
  }



  

  return (
    <div>
      <input type="text" onChange={handlechange} placeholder='enter an Text' name='name' value={person.name || ''} /><br />
      <input type="text" onChange={handlechange} placeholder='enter an roll' name='roll' value={person.roll || ''} /><br />
      <input type="text" onChange={handlechange} placeholder='enter an name' name='text' value={person.text || ''} /><br />
      <input type="text" onChange={handlechange} placeholder='enter your age' name='age' value={person.age || ''} /><br />
      <button type='button' onClick={handleshow}>show text</button>
      <h2>Name:{showPerson.name}</h2>
      <h2>Roll:{showPerson.roll}</h2>
      <h2>Text:{showPerson.text}</h2>
      <h2>Age:{showPerson.age}</h2>
    </div>
  )
}

export default App

