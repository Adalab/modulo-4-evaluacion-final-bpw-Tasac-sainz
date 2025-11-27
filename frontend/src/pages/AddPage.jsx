import "react"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../services/api";
import Header from "../components/Header";
import cooking from "../images/cooking.png"

const AddPage = () => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState ("");
    const [instructions, setInstructions] = useState("");

    const navigate = useNavigate();

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeIngredients = (e) => setIngredients(e.target.value);
    const handleChangeInstructions = (e) => setInstructions(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addRecipe({ name, ingredients, instructions })
            .then(() => {
                navigate("/recipes")
            })
    };



    return (
        <>
            <Header/>
            <h1 className="recipe-title">Añade tu receta</h1>
            <div className="edit-container">
            <img src={cooking} className="edit-chef"/>
            <label htmlFor="name">Nombre de la receta</label>
            <input 
                className="input"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChangeName}

            />
            <label htmlFor="ingredients">Ingredientes</label>
            <input 
                className="t-ingred"
                type="text" 
                name="ingredients" 
                id="ingredients"
                value={ingredients}
                onChange={handleChangeIngredients}
            />
            <label htmlFor="instructions">Pasos a seguir</label>
            <textarea 
                className="input t-area"
                name="instructions"
                id="instructions"
                value={instructions}
                onChange={handleChangeInstructions}
            />
            <button
                className="save"
                onClick={handleSubmit}
            >Guardar receta</button>
        </div>
        </>

    )
}

export default AddPage