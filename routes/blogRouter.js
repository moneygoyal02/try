const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController.js");

// getting all the blogs
router.get("/", blogController.blog_index);

// render create blog page
router.get("/new", blogController.blog_create_get);

// save blog to db
router.post("/", blogController.blog_create_post);

// get single blog
router.get("/:id", blogController.blog_details);

// delete a single blog
router.delete("/:id", blogController.blog_delete);

// updating a single blog

module.exports = router;