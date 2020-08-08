
const Post = require('../models/post')

const router = require('./server.js');
// routes

// Index
router.get('/posts', (req, res) => {
    Post.find({}, (error, allPosts) => {
         // define error
         if (error) {
            res.send(error)
        } else {
            // render all posts on main index
            res.json(allPosts);
        };
    });
});

// find specific catagory
router.get('/posts/catagories/:catagory', (req, res) => {
    Post.find({catagory: req.params.catagory}, (error, allPosts) => {
         // define error
         console.log(allPosts)
         if (error) {
            res.send(error)
        } else {
            res.json(allPosts)
        };
    });
})

// Create
router.post('/', (req, res) => {
    // Use Model to create a new post
    Post.create(req.body, (error, createdPost) => {
        // define error
        if (error) {
            res.send(error)
        } else {
        // Once post has been created redirect to main shiver page
        res.json({ msg: "created" })
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
        res.json(foundPost);
        }
    });
});


// Delete
router.delete('/posts/:id', (req, res) => {
    // Delete document from collection
    Post.findByIdAndRemove(req.params.id, (error, post) => {
        // define error
        if (error) {
            res.send(error)
        } else {
            // after post has been deleted, redirect to main shiver page
            res.json({msg: "deleted"})
        };
    });
});

// Edit 
router.post('/posts/:id', (req, res) => {
    // Find document from the collection using mongoose model
    Post.findByIdAndUpdate(req.params.id, req.body, (error, foundPost) => {
        // define error
        if (error) {
            res.send(error)
        } else {
            // render the edit view and pass it the found post
            res.json({msg: "post updated"})
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