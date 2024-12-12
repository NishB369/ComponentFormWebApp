import React from 'react'
import ReactDOM from 'react-dom/client'
import Widget from './Components/Widget/Widget'

const App = () => {
  return (
    <div className='h-lvh w-[80%] flex items-center justify-center'>
    <Widget />
    </div>
)
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)