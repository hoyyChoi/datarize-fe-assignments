import { DashboardPage } from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
