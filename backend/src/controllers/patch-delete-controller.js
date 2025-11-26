const mysql = require("../database/mysql-pool");

const patchDeleteController = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        if (!id || isNaN(id) || Number(id) <= 0) {
            res.status(400).send(
                "id incorrecta, por favor, introduce una id válida"
            );
        }
        const query =
            "UPDATE recipes SET deleted_at = NOW() WHERE id = ? AND fk_user=?";
        const connection = await mysql.getConnection();
        await connection.query(query, [id, userId]);
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
