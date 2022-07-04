import React, { memo, useEffect, useState } from "react"

// function ShowName({ name }) {
//   console.log("showName render...")
//   return <div>{name}</div>
// }

// // const ShowNameMemo = memo(ShowName)
// const ShowNameMemo = ShowName

// function App() {
//   const [index, setIndex] = useState(0);
//   const [name] = useState("张三");

//   useEffect(() => {
//     setInterval(() => {
//       setIndex(prev => prev + 1)
//     }, 1000)
//   }, [])

//   return (
//     <div>
//       {index}
//       <ShowNameMemo name={name} />
//     </div>
//   )
// }

function ShowPerson({ person }) {
  console.log("ShowPerson render...")
  return (
    <div>
      {person.name} {person.age}
    </div>
  )
}
const ShowPersonMemo = memo(ShowPerson, comparePerson)
// const ShowPersonMemo = ShowPerson;
   
function comparePerson(prevProps, nextProps) {
  if (
    prevProps.person.name !== nextProps.person.name ||
    prevProps.person.age !== nextProps.person.age
  ) {
    return false
  }
  return true
}

function App() {
  const [person, setPerson] = useState({ name: "张三", age: 20, job: "waiter" })
  return <>
    <ShowPersonMemo person={person} />
    <button onClick={() => setPerson({...person, job: "chef"})}>button</button>
  </>
}

export default App