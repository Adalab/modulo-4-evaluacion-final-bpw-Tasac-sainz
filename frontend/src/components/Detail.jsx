import "react";
import PropTypes from 'prop-types';

const Detail = ({ recipe }) => {
    return (
        <>
            <p>{recipe?.name}</p>
            <p>{recipe?.ingredients}</p>
            <p>{recipe?.instructions}</p>
        </>
    )
}

export default Detail;

Detail.propTypes = {
    recipe: PropTypes.object.isRequired
}