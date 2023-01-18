import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { QueryClientProvider, QueryClient } from 'react-query'
import ScrollToTop from './utils/ScrollToTop'
// const queryClient = new QueryClient()
// import '../src/mock/server'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
  // </QueryClientProvider>
)
