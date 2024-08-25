import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './routes/Main'
import Home from './routes/Main/Home'
import Products from './routes/Main/Products'
import ProductHome from './routes/Main/Products/ProductHome'
import Computers from './routes/Main/Products/Computers'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} >
            <Route index element={<ProductHome />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*

            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          </Route>
        <Route path="*" element={<NotFound />} />
          */