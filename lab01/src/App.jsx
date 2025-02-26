import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/BaiTap1.css'
import BaiTap1 from './components/BaiTap1';

function App() {

  // const [name, setName] = useState("");
  // const [greeting, setGreeting] = useState("");
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  // const [sum, setSum] = useState(0);

  // const handleGreeting = () => {
  //   setGreeting(`Hello ${name}`);
  // }

  // const handleSum = () => {
  //   setSum(num1 + num2);
  // }

  return (
    <>
      {/* <h1>React App</h1>
      <div>
        <h2>Nhập tên của bạn</h2>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleGreeting}>Hello Name</button>
        <p>{greeting}</p>
      </div>
      <br />
      <div>
        <h2>Nhập 2 số bất kỳ để cộng</h2>
        <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
        <input type="number" onChange={(e) => setNum2(Number(e.target.value))} />
        <button type="button" onClick={handleSum}>Add 2 numbers</button>
        <p>Sum: {sum}</p>
      </div>
      <br /> */}
      <BaiTap1 />
    </>
  )
}

export default App
