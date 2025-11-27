import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipe } from "../services/api";
import Header from "../components/Header"
import cooking from "../images/cooking.png"

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipe(id).then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Cargando...</p>;

  return (
    <>
      <Header/>
      <h1 className="recipe-title">{recipe.name}</h1>
      <div className="one-recipe-container" >
        <img className="img-recipe" src={cooking}/>
        <p className="subtitle">Ingredientes</p>
        <ul className="ingredients">
        {recipe.ingredients.split(", ").map((ing, index) => (
        <li key={index}>{ing}</li>
            ))}
        </ul>
        <p className="subtitle">Instrucciones</p>
        <ol className="instructions">
            {recipe.instructions.split(". ").map((step, index) => (
            <li key={index}>{step}</li>
        ))}
        </ol>
    </div>
    </>
  );
};

export default RecipePage;