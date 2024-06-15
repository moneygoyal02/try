const Blog = require("../models/blog.js");

// getting all the blogs
const blog_index = async (req, res) => {
    let blogs = (await Blog.find()).reverse();
    res.render("blogs/index", { blogs, title: "Blogs" });
}

// render create blog page
const blog_create_get = (req, res) => {
    res.render("blogs/create", {title: "Create new blog"});
}

// save blog to db
const blog_create_post = async (req, res) => {
    let newBlog = new Blog(req.body);
    await newBlog.save();
    res.redirect("/");
}

// get single blog
const blog_details =  async (req, res) => {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    res.render("blogs/details", {blog, title: `Blog || ${blog.title}`});
}

// delete a single blog
const blog_delete = async(req, res) => {
    const blogId = req.params.id;
    await Blog.findByIdAndDelete(blogId);
    res.json({redirect: "/"});
}

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete
}