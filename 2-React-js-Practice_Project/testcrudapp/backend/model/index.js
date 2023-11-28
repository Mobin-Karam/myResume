
// use mongoose for connected to mongodatebase
import mongoose, { Schema, model } from "mongoose";


// Database
// for connetcted to mongodb with this code :::
// use connect Method()
mongoose.connect("mongodb://root:EizsmIrcswlooJ69V40JFGQr@billy.iran.liara.ir:30918/my-app?authSource=admin");
const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments: [{
        user: String,
        content: String,
        votes: Number
    }]
});

export const Blog = model('Blog', blogSchema);
