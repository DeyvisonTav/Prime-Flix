import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Erro } from './pages/Error/Erro'
import { Favoritos } from './pages/Favoritos/Favoritos'
import { Filme } from './pages/Filme/Filme'
import { Home } from './pages/Home/Home'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}
