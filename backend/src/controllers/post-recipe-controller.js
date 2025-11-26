const mysql = require("../database/mysql-pool");

const postRecipeController = async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;
        const userId = req.user.id;
        if (!name || typeof name !== "string" || name.length > 40) {
            return res
                .status(400)
                .send("El nombre de la receta es demasiado largo");
        }
        if (!ingredients || typeof ingredients !== "string") {
            return res
                .status(400)
                .send(
                    "Los ingredientes no tienen el formato correcto, por favor, escribe texto"
                );
        }
        if (!instructions || typeof instructions !== "string") {
            res.status(400).send(
                "Por favor escribe las instrucciones en formato texto"
            );
        }
        const query =
            "INSERT INTO recipes (name, ingredients, instructions, fk_user) VALUES (?,?,?,?)";
        const connection = await mysql.getConnection();
        await connection.query(query, [
            name,
            ingredients,
            instructions,
            userId,
        ]);
        res.status(201).json({
            message: "Receta creada",
        });
    } catch {
        res.status(400).send("Algo ha fallado");
    }
};

module.exports = {
    postRecipeController,
};
