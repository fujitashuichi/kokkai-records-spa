import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
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

        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
