import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

// import TestInterval from './testInterval';
import ClassComponents from './classComponents';

function App() {
  let [intervalFlag, setIntervalFlag] = useState(true);

  return (
    <>
      <p>App works</p>
      {/* /* ************* TestInterval *********** */}

      {/* {intervalFlag && <TestInterval /> }
      <button onClick={() => { setIntervalFlag(prev => !prev)}}>
          卸载TestInterval
        </button> */}

       {/* /* ************* ClassComponents *********** */}
        {/* <ClassComponents /> */}
    </>
  )
}

export default App
