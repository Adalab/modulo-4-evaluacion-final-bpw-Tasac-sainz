import { useEffect, useState } from 'react'
import Header from '../components/Header';
import RecipesList from "../components/RecipesList"
import { getRecipes } from '../services/api';
import '../styles/app.css'

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes().then(data => {
            setRecipes(data);
        })
    }, [])

    return (
        <>
        <div className='recipe-container'>
        <Header />
        <h1 className='list-title'>Mis recetas</h1>
        <section>
            <RecipesList recipes={recipes} />
        </section>
        </div>
        </>
    )
}

export default RecipesPage;