import Nav from './components/Nav/Nav.jsx'
import Card from './components/Card/Card.jsx'

import './App.css'
import './components/Nav/Nav.css'
import './components/Card/Card.css'

import data from './javascript/data.js'

function App() {

  console.log(data)

  const cardElements1 = data[0].map(item => {
    return (
      <Card
        num={item.num}
        title={item.title}
        desc={item.desc}
        abrev={item.abrev}
      />
    )
  })

  const cardElements2 = data[1].map(item => {
    return (
      <Card
        num={item.num}
        title={item.title}
        desc={item.desc}
        abrev={item.abrev}
      />
    )
  })

  const cardElements3 = data[2].map(item => {
    return (
      <Card
        num={item.num}
        title={item.title}
        desc={item.desc}
        abrev={item.abrev}
      />
    )
  })

  return (
    <>
      <Nav />
      <div className="container main__container">
        <div className="main__wrapper">
          <h2 className='main__title'>Услуги</h2>
          <div className="cards__container">
            <div className="cards__container1">
              {cardElements1}
            </div>
            <div className="cards__container2">
              {cardElements2}
            </div>
            <div className="cards__container3">
              {cardElements3}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
