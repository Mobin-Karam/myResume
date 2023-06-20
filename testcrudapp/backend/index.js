

//...instrument
import express from "express";
// import { Blog } from "./model/index.js";
import routes from './routes/posts.js'



const port = 8080;
const app = express();
const router = express.Router()

app.use(express.json())

app.use("/api", routes) // new


// import data 
// const article = new Blog({
//     title: 'Awesome Post!',
//     slug: 'awesome-post',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcement'],
// });

// await article.save();


// App
app.get('/', (req, res) => {
    console.log(res.json("hello world"))
})


app.listen(port, () => {
    console.log('Connected to Backend!')
})







