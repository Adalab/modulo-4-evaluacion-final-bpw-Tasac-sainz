export const getRecipes = () => {
    return fetch("http://localhost:3000/recipes", {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                };
            });
            return cleanData;
        })
        .catch((error) => console.log(error));
};

export const getRecipe = (id) => {
    return fetch(`http://localhost:3000/recipe/${id}`, {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    ingredients: item.ingredients,
                    instructions: item.instructions,
                };
            });
            return cleanData[0];
        })
        .catch((error) => console.log(error));
};

export const login = ({ user_name, password }) => {
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, password }),
    }).then((response) => response.json());
};

export const signup = ({ user_name, email, password }) => {
    return fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, email, password }),
    }).then((response) => response.json());
};

export const addRecipe = ({ name, ingredients, instructions }) => {
    return fetch("http://localhost:3000/new-recipe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ name, ingredients, instructions }),
    });
};
