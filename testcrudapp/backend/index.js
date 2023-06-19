

//...instrument
import express from "express";
import { Blog } from "./model/index.js";



const port = 8080;
const app = express();

app.use(express.json())


// import data 
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
});

await article.save();


// ... for find data in database
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);


// App
app.get('/', (req, res) => {
    console.log(res.json("hello world"))
})

app.get("/post", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
});

app.listen(port, () => {
    console.log('Connected to Backend!')
})







