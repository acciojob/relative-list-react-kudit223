import React from 'react'

const App = () => {
  const relative=['happy','sabu','harsh','via']
  return (
    <div id="main">
             <ol>
              {relative.map((item,index)=>{
                return <li key={index}>{item}</li>
              })}
             </ol>
    </div>
  )
}

export default App
