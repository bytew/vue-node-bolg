var sqlMap = {
  blogger: {
    select:'SELECT * FROM blogger ',
    update:'UPDATE blogger SET username = ? WHERE id = ?'
  },

  blog:{
    select:'SELECT * FROM blog',
    selectOne:'SELECT * FROM blog WHERE blogid = ?',
  },

  blogCategory:{
    select:'SELECT * FROM blog_category'
  }

}

module.exports = sqlMap;
