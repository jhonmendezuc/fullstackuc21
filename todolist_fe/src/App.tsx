import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import Task from "./components/task/Task"
import NotFound from "./components/commons/NotFound"
import type { CSSProperties } from "react"


const footerStyles: CSSProperties = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '10px',
  backgroundColor: '#2e2e2eff',
  textAlign: 'center',
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <footer style={footerStyles}>
        <p>App de todolist Fullstack 2025</p>
      </footer>
    </>
  )
}

export default App
