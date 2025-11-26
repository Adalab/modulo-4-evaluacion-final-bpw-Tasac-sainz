const mysql = require("../database/mysql-pool");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const postSignupController = async (req, res) => {
    try {
        const { user_name, email, password } = req.body;
        if (
            !user_name ||
            typeof user_name !== "string" ||
            user_name.length > 20
        ) {
            return res.status(400).send("Este usuario no es válido");
        }
        if (!email || typeof email !== "string") {
            return res.status(400).send("El email es obligatorio");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send("El email no tiene un formato válido");
        }
        if (!password || typeof password !== "string" || password.length <= 7) {
            return res
                .status(400)
                .send(
                    "La contraseña no es válida, debe contener al menos 8 caracteres"
                );
        }
        const passwordHash = await bcrypt.hash(password, 10);
        const query =
            "INSERT INTO users (user_name, email, password) VALUES (?, ?, ?)";

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [
            user_name,
            email,
            passwordHash,
        ]);
        const token = generateToken({ id: data[0].insertId });
        res.json({ token, name: user_name, id: data[0].insertId });
        res.status(200).send("Usuario creado");
    } catch (error) {
        console.log(error);
        res.status(400).send("Algo ha fallado, usuario no registrado");
    }
};

module.exports = {
    postSignupController,
};
