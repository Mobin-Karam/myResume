import express from "express";
import { db } from "./db.js"

// The App is running in express Server 

const app = express()

// if there is auth problem 
//! we should use mysql2 not mysql in (npm install mysql2)

// This is allow us to seed data in client side to backend side
app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello this is Backend!")
})

app.get("/api/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/api/books", (req, res) => {
    const q = "INSERT INTO books (`title` , `desc`, `cover`) VALUES (?) "

    // this is from backend 
    // const values = ["title from backend", "desc from backend", "cover from backend"]

    // this is from (client side)uesr request in body of elements 
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        // return res.json(data)
        return res.json("Books has been created successefully!")
    })
})

app.listen(8000, () => {
    console.log("Connected to Backend!")
})