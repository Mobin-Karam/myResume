export const getPost = () => {
    async (req, res) => {
        const posts = await Blog.find()
        res.send(posts)
    }
} 