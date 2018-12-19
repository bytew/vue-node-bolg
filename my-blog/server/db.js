
// 数据库连接配置
module.exports = {
  mysql: {
    host: '127.0.0.1',  // 新建数据库连接时的 主机名或ID地址 内容
    user: 'root',
    password: '123456', // root 密码
    database: 'myblog', // 数据库名
    port: '3306'
  }
}






// const mysql = require('mysql');
//
// const mysqlConfig = {
//   host: '127.0.0.1',  // 新建数据库连接时的 主机名或ID地址 内容
//   user: 'root',
//   password: '123456', // root 密码
//   database: 'myblog', // 数据库名
//   port: '3306'
// }

// const pool = mysql.createPool({
//   host: mysqlConfig.host,
//   user: mysqlConfig.user,
//   password: mysqlConfig.password,
//   database: mysqlConfig.database,
//   port: mysqlConfig.port,
//   multipleStatements: true    // 多语句查询
// });



// var setValue = function() {
//   pool.getConnection((err, connection) => {
//     var sql = 'INSERT INTO blogger(id, username,password) VALUES (2, "byteWang2","123456")'
//     connection.query(sql, (err, result) => {
//       console.log(result);
//       connection.release();
//     })
//   })
// }
//
// setValue();

// 查询数据，？ 的值填入 connection.jquery 的第二个参数（数组）中
// WHERE id = ? AND name = ? ---> connetion.query(sql, [1, "blog"], () => )
// var getValue = function() {
//   pool.getConnection((err, connection) => {
//     var sql = 'SELECT * FROM blogger WHERE id = ?'
//     connection.query(sql, [1], (err, result) => {
//       console.log(result);
//       connection.release();
//     })
//   })
// }
// getValue();


// 更新数据
// var updValue = function() {
//   pool.getConnection((err, connection) => {
//     var sql = 'UPDATE blogger SET username = ? WHERE id = ?'
//     connection.query(sql, ['byteWang2', 2], (err, result) => {
//       console.log(result);
//       connection.release();
//     })
//   })
// }
// updValue();


// 删除数据
// var delValue = function() {
//   pool.getConnection((err, connection) => {
//     var sql = 'DELETE FROM blogger WHERE id = ?'
//     connection.query(sql, [2], (err, result) => {
//       console.log(result);
//       connection.release();
//     })
//   })
// }
// delValue();

