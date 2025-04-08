import { useState } from 'react'
import Header from './header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // creat a p element that contains a catch phrase 
  // create an array superhero catch phrases
  // create a button on the page an dlabel it "Change Phrase"
 

  const [phrase, setPhrase] = useState("OMG!")
  
  const phrases = ["With Great power, comes great responsibility", "What's the big idea?", "Odin's Beard!", "My spidey sneses!", "do the roar!"]

  function handleChange(){
    let index = Math.floor ((Math.random() * phrases.length))
    setPhrase(phrases[index])
} 



  return (
    <div>
      <Header />
      <p>{phrase}</p>
      <button onClick={handleChange} > change phrase </button>
      < img src=".\src\assets\giphy.gif" alt="my image" width="245"height="245"></img>
    </div>
  )
   
}

export default App
