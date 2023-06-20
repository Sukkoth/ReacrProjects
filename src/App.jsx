import { useState } from 'react'
import dataSet from './data' //this is an array
import Question from './Question' // this one is component
import './App.css'

function App() {
  const [data, setData] = useState(dataSet)
  return (
    <main className='main'>
      <div className='container'>
        <div className="header">Questions And Answers About Things</div>
        <section className="questions">
          {
            data.map((question) => (
             <Question question={question} key={question.id}/>
            ))
          }
        </section>
        {
          data.length == 0 && <div className='card'><p style={{color: 'red'}}>No Question Data Found</p></div>
        }
      </div>
    </main>
  )
}

export default App
