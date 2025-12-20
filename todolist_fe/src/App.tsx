import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/login/Login"
import TaskList from "./components/task/TaskList"
import type { CSSProperties } from "react"
import ProtectedRoute from "./components/commons/ProtectedRouter"

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
          <Route path="/" element={
            <ProtectedRoute>
              <TaskList />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <footer style={footerStyles}>
        <p>App de todolist Fullstack 2025</p>
      </footer>
    </>
  )
}

export default App
