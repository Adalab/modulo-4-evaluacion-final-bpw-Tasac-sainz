import 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import RecipesPage from './RecipesPage';
import RecipePage from './RecipePage';
import AddPage from './AddPage';
import NotLoged from '../components/NotLoged';
import PrivateRoute from "../components/PrivateRoute"
import '../styles/app.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new-recipe" element={<PrivateRoute><AddPage/></PrivateRoute>} />
      <Route path='/recipe/:id' element={<PrivateRoute><RecipePage/></PrivateRoute>} />
      <Route path='/recipes' element={<PrivateRoute><RecipesPage/></PrivateRoute>} />       
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/notloged' element={<NotLoged/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
  )
}

export default App