'use strict'

import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "mobinkaram",
    password: "Mobink@r@m1381",
    database: "test"
    // host:"localhost",
    // user:"mobinkaram",
    // password:"Mobink@r@m1381",
    // database:"pzfxxqyo_myapp"
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello this is backend!")
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Books has been created successfully");
    });
});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Books has been Deleted successfully");
    });
});

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?,`desc` = ?,`price` = ?,`cover` = ? WHERE id = ?"

    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];

    db.query(q, [...values,bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Books has been Update successfully");
    });
});

app.listen(8080, () => {
    console.log("connected to backend!")
});