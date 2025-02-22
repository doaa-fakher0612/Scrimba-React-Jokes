
import './App.css'
import Joke from "./components/Joke"
import jokesData from "./jokesData"
import Header from "./components/Header"

export default  function App() {

  const jokesElements = jokesData.map((joke)=>{
return    <Joke setup = {joke.setup} punchline={joke.punchline}/>
  })

  return (
    <>
  {jokesElements}
    </>
  )


}


