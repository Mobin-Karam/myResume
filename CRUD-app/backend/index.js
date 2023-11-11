import express from "express"
import mysql from "mysql2"

const app = express()

app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "mobinkaram",
    password: "Mobink@r@m1381",
    database: "test"
})

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        // "titles from backend",
        // "desc from backend",
        // "cover from backend"
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json('Book has been created successfully');
    })
})

app.listen(8800, () => {
    console.log('Connected to Backend!')
})