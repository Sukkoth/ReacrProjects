import Question from './Question'
import dataSet from './data'
function App() {
  return (
    <main className='main'>
      <div className='container'>
        <div className="header">Questions And Answers About Things</div>
        <section className="questions">
          {
            dataSet.map((question) => (
             <Question question={question} key={question.id}/>
            ))
          }
        </section>
        {
          dataSet.length == 0 && <div className='card'><p style={{color: 'red'}}>No Question Data Found</p></div>
        }
      </div>
    </main>
  )
}

export default App
