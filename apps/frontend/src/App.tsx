import { DashboardPage } from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NotFoundPage } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
