
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");

// routers
const blogRouter = require("./routes/blogRouter.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

// connection to mongodb
mongoose.connect('mongodb+srv://goyalmoney95:hI3UA69wbxff2NDk@cluster0.ex5u5nz.mongodb.net/blog')
    .then(() => {
        console.log("Connected to DB");
        const port = process.env.PORT || 8080;
        app.listen(port, () => {
            console.log(`Listening to port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.redirect("/blogs")
})

app.use("/blogs", blogRouter);

app.all("*", (req, res) => {
    res.render("404.ejs", {title: "Page not found"});
})
