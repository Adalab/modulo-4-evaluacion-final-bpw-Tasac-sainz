const mysql = require("../database/mysql-pool");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const postLoginController = async (req, res) => {
    try {
        const { user_name, password } = req.body;
        const query = "SELECT * FROM users WHERE user_name = ?";
        const connection = await mysql.getConnection();
        const [data] = await connection.query(query, [user_name]);
        const user = data[0];
        if (!user) {
            return res.status(401).json({ error: "Este usuario no existe" });
        }

        console.log("Password enviado:", password);
        console.log("Hash en DB:", user.password);

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log("Resultado bcrypt.compare:", isPasswordCorrect);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Credenciales no válidas" });
        }

        const token = generateToken({ id: user.id });
        res.json({ token, name: user.user_name, id: user.id });
    } catch {
        res.status(400).send("Algo ha fallado");
    }
};

module.exports = {
    postLoginController,
};
