const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { generateToken } = require("./utils/jwt");
const { authenticateToken } = require("./middlewares/authenticate-token");
const {
    getRecipesController,
    getRecipeController,
    postRecipeController,
    putUpdateController,
    patchDeleteController,
} = require("./controllers");
const app = express();
const port = 3000;

require("dotenv").config();
app.use(express.json({ limit: "25mb" }));
app.use(cors());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// ENDPOINTS:
//Endpoint para obtener todas las recetas:
app.get("/recipes", getRecipesController);

// Endpoint para obtener una receta por su id:
app.get("/recipe/:id", getRecipeController);

//Endpoint para crear una nueva receta:
app.post("/new-recipe", postRecipeController);

//Endpoint para actualizar una receta existente: cambio el nombre de la receta id=1 de "pollo al curry rápido" a "pollo al curry a mi estilo"
app.put("/update-recipe/:id", putUpdateController);

//Endpoint para "eliminar" receta:
app.patch("/delete-recipe/:id", patchDeleteController);
