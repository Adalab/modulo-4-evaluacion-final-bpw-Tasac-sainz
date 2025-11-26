const mysql = require("../database/mysql-pool");

const patchDeleteController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(id) || Number(id) <= 0) {
            res.status(400).send(
                "id incorrecta, por favor, introduce una id válida"
            );
        }
        const query = "UPDATE recipes SET deleted_at = NOW() WHERE id = ?";
        const connection = await mysql.getConnection();
        await connection.query(query, [id]);
        res.status(201).json({
            message: "Receta eliminada",
        });
    } catch {
        res.status(400).send("Algo ha fallado");
    }
};

module.exports = {
    patchDeleteController,
};
