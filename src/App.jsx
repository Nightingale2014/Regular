import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App1 from "./page/test.jsx";



function App() {

  return (
    <>
     <Routes>
         <Route path="/" element={<App1/>} />
     </Routes>
    </>
  )
}

export default App
