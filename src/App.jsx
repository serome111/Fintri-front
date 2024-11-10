import { useState } from 'react'
import './styles/tailwind.css';
import LoginCPage from './pages/LoginCPage';
import { useTheme } from './hooks/useTheme';

function App() {
  useTheme();

  return (
    <>
      <div>
        <LoginCPage />
      </div>
    </>
  )
}

export default App
