import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error, Register, ProtectedRoute } from './pages/'
import { Book, Bookings, Home, Orders, Profile, SharedLayout } from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={
          <ProtectedRoute >
            <SharedLayout />
          </ProtectedRoute>
        }>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Book />} />
          <Route path='book' element={<Book />} />
          {/* <Route path='bookings' element={<Bookings />} />
          <Route path='orders' element={<Orders />} /> */}
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={1000} />
    </BrowserRouter>
  )
}

export default App
