import { useState, useEffect } from 'react'
import SionTelEnrollmentForm from './components/SionTelEnrollmentForm'
import FormationsPage from './components/FormationsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Écouter les changements de hash dans l'URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#formations') {
        setCurrentPage('formations')
      } else {
        setCurrentPage('home')
      }
    }

    // Vérifier le hash initial
    handleHashChange()

    // Écouter les changements
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (currentPage === 'formations') {
    return <FormationsPage />
  }

  return <SionTelEnrollmentForm />
}

export default App
