var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require("./models/userModel");
const Blog = require("./models/blogModel");

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var conn = mongoose.connection;
module.exports = conn;

router.post('/create', async (req, res) => {
    const title = req.body.title
    const content = req.body.content
    const date = req.body.date
    const email=  req.body.email
    if (!title || !content || !date || !email) {
        res.status(400).send("Incorrect or empty fields")
    }
    else {
        try {
            User.findOne({ email: email }, (err, user) => {
                if (err)
                    res.status(500).send(err)
                if (user) {
                    const blog = new Blog({ title: title, content: content, date: date })
                    blog.user = user
                    blog.save(err => {
                        if (err)
                            res.status(500).send(err)
                        else
                            // 201 if stored
                            console.log("Blog created")
                            res.status(201).json({
                                message: "Blog created successfully",
                            })
                    })
                }
                else {
                    res.status(401).send("Error")
                }
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    }
})

router.patch('/edit', async (req, res) => {
    const title = req.body.title
    const content = req.body.content
    const date = req.body.date
    const id = req.body.id
    const email = req.body.email;

    if (!id) {
        res.status(400).send("Incorrect or empty fields")
    }
    else if (!title && !content && !date) {
        res.status(400).send("Incorrect or empty fields")
    }
    else {
        try {
            const blog = Blog.findOneAndUpdate({ _id: id }, { title: title, content: content, date: date }, err => {
                if (err)
                    res.status(500).send(err)
                else
                    // 204 if updated
                    res.status(204).json({
                        message: "Blog updated successfully",
                    })
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).send("Internal Server Error")
        }
    }
})



router.get("/ViewUserBlog", async (req, res) => {
     let limit = req.query.limit
    let offset = req.query.offset
    const email = req.body.email;

    try {
    let user = await User.findOne({ email: email }).exec()
    if(!user){
      res.status(400).send("User does not exist")
    }
    let response = await Blog.find({ user: user._id }).limit(limit).skip(offset).populate("user")
    res.status(200).json({ blogs: response });
    
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/ViewBlog/:id", async (req, res) => {
    const id = req.params.id

    if (!id) {
        res.status(400).send("Incorrect or empty fields")
    }
    else {
        try {
            let response = await Blog.findOne({ _id: id }).populate("user");
            res.status(200).json(response)
        }
        catch (e) {
            console.log(e);
            res.status(500).send("Internal Server Error");
        }
    }
})
router.get('/GetTotalBlogs', async (req, res) => {
    try {
        let response = await Blog.estimatedDocumentCount();
        res.status(200).json({count:response});
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/GetTotalUserBlogs', async (req, res) => {
    const email = req.body.email;
    let user;
    try {
    user = await User.findOne({ email: email }).exec();
        if (!user) {
            res.status(400).send('User does not exist');
        }
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
    try {
        let response = await Blog.find({ user: user._id });
        res.status(200).json({ count: response.length });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});
router.get("/ViewAllBlogs", async (req, res) => {
    let limit = req.query.limit
    let offset = req.query.offset
    console.log("Fired")
  try {
    let response = await Blog.find({}).limit(limit).skip(offset).populate("user")
    res.status(200).json({blogs:response})
  }
  catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
})
router.delete('/delete/:id', async (req, res) => {
    let id = req.params.id;
      try {
        Blog.findByIdAndRemove(
            id,
            function (err, blog) {
                if (err) next(err);
                else {
                    res.status(200).json({
                        status: 'success',
                        message: 'Blog deleted successfully!!!',
                        data: null,
                    });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
});
    
module.exports = router
