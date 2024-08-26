import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './routes/Main'
import Home from './routes/Main/Home'
import Products from './routes/Main/Products'
import ProductHome from './routes/Main/Products/ProductHome'
import Computers from './routes/Main/Products/Computers'
import Electronics from './routes/Main/Products/Electronics'
import Books from './routes/Main/Products/Books'
import About from './routes/Main/About'
import NotFound from './routes/Main/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} >
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
<Route index element={<Computers />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          </Route>
        <Route path="*" element={<NotFound />} />
          */