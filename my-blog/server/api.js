const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});
module.exports = {
  getBlogger(req, res, next) {
    console.log(pool,'pool')
    pool.getConnection((err, connection) => {
      var sql = sqlMap.blogger.select;
      connection.query(sql, [], (err, result) => {
        res.json(result[0]);
        connection.release();
      })
    })
  },
  setBlogger(req, res, next) {
    var id = req.body.id, name = req.body.name;

    pool.getConnection((err, connection) => {
      var sql = sqlMap.blogger.update;
      connection.query(sql, [name, id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },

  selectBlog(req, res, next){
    pool.getConnection((err, connection) => {
      var sql = sqlMap.blog.select;
      connection.query(sql, [], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },

  selectOneBlog(req, res, next){
    var id = req.body.id;
    console.log(req.body.id,'req')

    pool.getConnection((err, connection) => {
      var sql = sqlMap.blog.selectOne;
      connection.query(sql,[id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },

  selectBlogCategory(req, res, next){
    pool.getConnection((err, connection) => {
      var sql = sqlMap.blogCategory.select;
      connection.query(sql,[], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  }
}

