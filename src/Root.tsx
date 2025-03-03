import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Phone from './components/Phone.tsx'
import HomeScreen from './HomeScreen.tsx'
import Works from './apps/Works.tsx'
import Experience from './apps/Experience.tsx'
import Skills from './apps/Skills.tsx'
import Contact from './apps/Contact.tsx'
import Error from './apps/Error.tsx'
import About from './apps/About.tsx'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Phone />}>
        <Route path='/' index element={<HomeScreen />}/>
        <Route element={<About />} path="/me" />
        <Route element={<Works />} path="/works" />
        <Route element={<Experience />} path="/experience" />
        <Route element={<Skills />} path="/skills" />
        <Route element={<Contact />} path="/contact" />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    <Analytics />
  </BrowserRouter>

)
