import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Cardlist from './components/Cardlist'
import Header from './components/header'
import Submit from './components/Submit'
import Navigation from './components/Navigation'

const App = () => {
  const [flip, setFlip] = useState(0)

  const [array,setArray] =useState([
      {
        id: 1,
        question: 'What is the correct command to create a new React project?' ,
        answer: 'npm create-react-app' ,
      },
      {
        id: 2,
        question: 'What command is used to start the React local development server?' ,
        answer: 'npm run dev' ,
      },
      {
        id: 3,
        question: 'What is the children prop?' ,
        answer: 'children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.' , 
      },
      {
        id: 4,
        question: 'What tool does React use to compile JSX?' , 
        answer: 'Babel' ,
      },
      {
        id: 5,
        question: 'What is a common use case for ref?' ,
        answer: 'Managing focus, text selection, or media playback.' ,
      },
     ]
    );

  return (
    <div className="App">
      <div className='container'>
      <Header />
      <Cardlist cards={array}/>
      <Submit />
      <Navigation />
      </div>

    </div>
  )
}

export default App

