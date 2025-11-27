import "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import PropTypes from 'prop-types';

const RecipesList = ({ recipes }) => {
    return (
        <ul className="recipe-list">
          {recipes.map(recipe => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <li>
                <Detail recipe={recipe} />
              </li>
            </Link>
          ))}
        </ul>
    )
}

export default RecipesList;

RecipesList.propTypes = {
    recipes: PropTypes.array.isRequired
}
