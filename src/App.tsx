import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './routes/Main'
import Home from './routes/Main/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
<Route path="products" element={<Products />} >
            <Route index element={<ProductsHome />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          </Route>
        <Route path="*" element={<NotFound />} />
          */