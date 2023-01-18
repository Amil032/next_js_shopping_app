import { Header } from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Actions } from './Pages/Actions/Actions'
// import { Blog } from './components/Pages/Blog/Blog'
import { BonusPlus } from './Pages/BounusPlus/BonusPlus'
import { Credit } from './Pages/Credit/Credit'
import { Footer } from './components/Footer/Footer'
import { Product } from './Pages/Product/Product'
import { Cart } from './Pages/Cart/Cart'
// import { Catalog } from './components/categories/Catalog'
import { Catalogue } from './Pages/Catalog/Catalogue'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/action' element={<Actions />} />
            <Route path='blog/:id' element={<Product />} />
            <Route path='/bonus' element={<BonusPlus />} />
            <Route path='/credit' element={<Credit />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/catalog/:catalogID/:sds' element={<Catalogue />} />
          </Routes>
        </Header>
        <Footer />
      </QueryClientProvider>
    </>
  )
}

export default App
