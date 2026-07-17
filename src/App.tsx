import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SetupWizardPage from './pages/SetupWizardPage'
import BusinessStructuresPage from './pages/BusinessStructuresPage'
import IndustriesPage from './pages/IndustriesPage'
import RegistrationPage from './pages/RegistrationPage'
import TaxCentrePage from './pages/TaxCentrePage'
import FinancePage from './pages/FinancePage'
import DownloadsPage from './pages/DownloadsPage'
import LearningCentrePage from './pages/LearningCentrePage'
import GovernmentDirectoryPage from './pages/GovernmentDirectoryPage'
import FundingCentrePage from './pages/FundingCentrePage'
import AssistantPage from './pages/AssistantPage'
import DashboardPage from './pages/DashboardPage'
import AdminPage from './pages/AdminPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/setup-wizard" element={<SetupWizardPage />} />
            <Route path="/business-structures" element={<BusinessStructuresPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/tax" element={<TaxCentrePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/learn" element={<LearningCentrePage />} />
            <Route path="/government" element={<GovernmentDirectoryPage />} />
            <Route path="/funding" element={<FundingCentrePage />} />
            <Route path="/assistant" element={<AssistantPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
