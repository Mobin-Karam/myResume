import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "mobinkaram",
    password: "Mobink@r@m1381",
    database: "book",
})