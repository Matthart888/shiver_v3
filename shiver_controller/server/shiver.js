const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');

// routes

// Index
router.get('/', (req, res) => {
    Post.find({}, (error, allPosts) => {
         // define error
         if (error) {
            res.send(error)
        } else {
            // render all posts on main index
            res.render('Index', { posts: allPosts});
        };
    });
});

// Specific Index
router.get('/tips&tricks', (req, res) => {
    Post.find({catagory: 'Tips & Tricks'}, (error, allPosts) => {
         // define error
         console.log(allPosts)
         if (error) {
            res.send(error)
        } else {
            // render all tips & tricks posts
            res.render('Index', { 
                posts: allPosts,
                catagory: 'Tips & Tricks'});
        };
    });
});

router.get('/news', (req, res) => {
    Post.find({catagory: 'News'}, (error, allPosts) => {
         // define error
         console.log(allPosts)
         if (error) {
            res.send(error)
        } else {
            // render all the news posts
            res.render('Index', { 
                posts: allPosts,
                catagory: 'News'});
        };
    });
});

router.get('/guides', (req, res) => {
    Post.find({catagory: 'Guides'}, (error, allPosts) => {
         // define error
         console.log(allPosts)
         if (error) {
            res.send(error)
        } else {
            // render all guides posts
            res.render('Index', { 
                posts: allPosts,
                catagory: 'Guides'});
        };
    });
});

router.get('/gamerthoughts', (req, res) => {
    Post.find({catagory: 'Gamer Thoughts'}, (error, allPosts) => {
         // define error
         console.log(allPosts)
         if (error) {
            res.send(error)
        } else {
            // render all tips and tricks posts
            res.render('Index', { 
                posts: allPosts,
                catagory: 'Gamer Thoughts'});
        };
    });
});

// New
router.get('/new', (req, res) => {
    res.render('New');
});

// Create
router.post('/', (req, res) => {
    // Use Model to create a new post
    Post.create(req.body, (error, createdPost) => {
        // define error
        if (error) {
            res.send(error)
        } else {
        // Once post has been created redirect to main shiver page
        res.redirect('/shiver')
        };
    });
});


// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Post.findById(req.params.id, (error, foundPost) => {
        // define error
        if (error) {
            res.send(error)
        } else {
        // render the Show route and pass it the foundPost
        res.render('Show', { post: foundPost });
        }
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Post.findByIdAndRemove(req.params.id, (error, post) => {
        // define error
        if (error) {
            res.send(error)
        } else {
            // after post has been deleted, redirect to main shiver page
            res.redirect('/shiver')
        };
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find document from the collection using mongoose model
    Post.findById(req.params.id, (error, foundPost) => {
        // define error
        if (error) {
            res.send(error)
        } else {
            // render the edit view and pass it the found post
            res.render('Edit', { post: foundPost });
        }
    });
});

// Put
router.put('/:id', (req, res) => {
    // Update the post document using our model
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        // define error
        if (error) {
            res.send(error)
        } else {
            // once update has been complete, redirect to main shiver page
            res.redirect('/shiver');
        }
    });
});



module.exports = router