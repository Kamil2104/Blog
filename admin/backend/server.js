/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");
const multer = require("multer"); 

const router = express.Router();
const PORT = 3001;

const authentication = require('./authentication');
const blogManagement = require('./blogManagement');

const app = express();
app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage(); // Stores the file in memory (buffer)
const upload = multer({ storage: storage });

app.listen(PORT, () => {
    console.log("Listening on port:", `${PORT}`);
});

app.use('/', router);

// Actions

// 1. Authentication:
router.post('/login', authentication.logIn);
router.post('/logOut', authentication.logOut);
router.post('/loggedIn', authentication.loggedIn);

// 2. Blog management:
router.post('/addBlog', upload.single('photo'), blogManagement.addBlog);
router.post('/displayBlogsNames', blogManagement.displayBlogsNames);
router.post('/deleteBlog', blogManagement.deleteBlog);