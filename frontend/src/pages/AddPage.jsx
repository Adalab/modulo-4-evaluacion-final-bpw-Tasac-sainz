import "react"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../services/api";
import Header from "../components/Header";

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
            <p className="subtitle">Añade tu receta</p>
            <label htmlFor="name">Nombre de la receta</label>
            <input 
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChangeName}

            />
            <label htmlFor="ingredients">Ingredientes</label>
            <input 
                type="text" 
                name="ingredients" 
                id="ingredients"
                value={ingredients}
                onChange={handleChangeIngredients}
            />
            <label htmlFor="instructions">Pasos a seguir</label>
            <textarea 
                name="instructions"
                id="instructions"
                value={instructions}
                onChange={handleChangeInstructions}
            />
            <button
                className="submit-btn"
                onClick={handleSubmit}
            >Guardar receta</button>
        </>

    )
}

export default AddPage