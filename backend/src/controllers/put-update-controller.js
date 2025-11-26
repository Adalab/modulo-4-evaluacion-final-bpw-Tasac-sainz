const mysql = require("../database/mysql-pool");

const putUpdateController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, ingredients, instructions } = req.body;
        if (!id || isNaN(id) || Number(id) <= 0) {
            res.status(400).send(
                "id incorrecta, por favor introduce una id váldia"
            );
        }
        if (!name || typeof name !== "string" || name.length > 40) {
            res.status(400).send(
                "Campo obligatorio, por favor escribe un nombre con máximo 40 caracteres"
            );
        }
        if (!ingredients || typeof ingredients !== "string") {
            res.status(400).send(
                "Campo obligatorio, por favor, escribe los ingredientes"
            );
        }
        if (!instructions || typeof instructions !== "string") {
            res.status(400).send(
                "Campo obligatorio, por favor escribe las instrucciones de la receta"
            );
        }
        const query =
            "UPDATE recipes SET name = ?, ingredients = ?, instructions = ? WHERE id=?";
        const connection = await mysql.getConnection();
        const data = await connection.query(query, [
            name,
            ingredients,
            instructions,
            id,
        ]);
        res.send("Receta actualizada");
    } catch {
        res.status(400).send("Algo ha fallado");
    }
};

module.exports = {
    putUpdateController,
};
