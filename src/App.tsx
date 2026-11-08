import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
import UpcomingProjects from './sections/UpComingProjects'

import { ThemeProvider } from './contexts/ThemeContext'


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            
          element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <UpcomingProjects />
                <Experience />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        {/* Documentation des projets */}
        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

        {/* Page introuvable */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-900">
                404 - Page introuvable
              </h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App