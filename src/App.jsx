import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
// import _ from "lodash"

import logo from './logo.svg'
import './App.css'

// import TestInterval from './testInterval';
// import ClassComponents from './classComponents';
// import MemoDemo from './memoDemo';
// import Home from './lazy/home'
// import List from './lazy/list'
// import ErrorBoundariesDemo from './errorBoundaries'
import EventDemo from './useEventDemo';

const About = React.lazy(() => import('./lazy/about'));
// const { keyBy } = import('loadsh')

function App() {
  let [intervalFlag, setIntervalFlag] = useState(true);

  // console.log(111, keyBy)

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

        {/* <MemoDemo /> */}


        {/* <BrowserRouter>
         <Link to="/">Home</Link><br />
         <Link to="/list">List</Link><br />
         <Link to="/about">about</Link>
         <Routes>
             <Route path="/" element={<Home />} exact /> 
             <Route path="/list" element={<List />} />
             <Route path="/about" element={
              <React.Suspense fallback={<div>loading...</div>}>
                <About />
              </React.Suspense>
             } />
         </Routes>
       </BrowserRouter> */}

      {/* <ErrorBoundariesDemo /> */}

      <EventDemo />
    </>
  )
}

export default App
