import Batsman from './Batsman'
import './App.css'

function App() {

  function handleClick() {
    alert('I am click')
  }

  const handleClick3 = () => {
    alert('Click 3')
  }


  const handleAdd = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      <Batsman></Batsman>
      
      <h1>Vite + React</h1>
      <button onClick={handleClick} >Click Now</button>
      <button onClick={function Click2() {
        alert('Click2')
      }} >Click Now</button>

      <button onClick={handleClick3}>Click Me </button>
      <button onClick={() => { alert('click 4') }}>Click Me </button>

      <button onClick={() => handleAdd(7)}>Click 5</button>
    </>
  )
}

export default App
