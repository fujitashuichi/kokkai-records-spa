import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ApiTest from './pages/ApiTest'
import { ErrorBoundary } from 'react-error-boundary'
import MainErrorFallback from './components/errors/main/MainErrorFallback'


function App() {
  return (
    <ErrorBoundary fallback={<MainErrorFallback />}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <HomePage />
          } />

          <Route path='/test' element={
            <ApiTest />
          } />

        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
