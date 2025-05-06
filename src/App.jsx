import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import BookDetailPage from './pages/BookDetailPage.jsx';
import './App.css'
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/books/:id' element={<BookDetailPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  )
}

export default App
