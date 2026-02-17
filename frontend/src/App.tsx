import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ApiTest from './pages/Test/ApiTest'
import { ErrorBoundary } from 'react-error-boundary'
import { MainErrorFallback } from './components/errors/main'

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
