const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const api = require('./api');

app.use(bodyParser.urlencoded({ extended: false }));


//博客主
router.post('/blogger/select', (req, res, next) => {
  api.getBlogger(req, res, next);
});

router.post('/blogger/update', (req, res, next) => {
  api.setBlogger(req, res, next);
});

// 博客
router.post('/blog/select', (req, res, next) => {
  api.selectBlog(req, res, next);
});

router.post('/blog/selectOne', (req, res, next) => {
  api.selectOneBlog(req, res, next);
});

//博客类别
router.post('/blogCategory/select', (req, res, next) => {
  api.selectBlogCategory(req, res, next);
});

module.exports = router;
