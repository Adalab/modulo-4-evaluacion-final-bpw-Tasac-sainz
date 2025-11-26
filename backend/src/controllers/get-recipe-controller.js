const mysql = require("../database/mysql-pool");

const getRecipeController = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        if (!id || isNaN(id) || Number(id) <= 0) {
            res.status(400).send(
                "id incorrecta, por favor, introduce una id válida"
            );
        }

        const query = "SELECT * FROM recipes WHERE id=? AND fk_user = ?";
        const connection = await mysql.getConnection();
        const data = await connection.query(query, [id, userId]);
        res.json(data[0]);
    } catch {
        res.status(400).send("Algo ha fallado");
    }
};

module.exports = {
    getRecipeController,
};
