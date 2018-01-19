const app = require('./server')
,db = app.get('db')

module.exports = {
  getAllBlogs: (req, res, next) => {
    db.getAllBlogs( (err, response) => {
      (!err) ? res.send(response) : res.send(err)
    })
  },

  getTestTable: (req, res, next) => {
    db.doIt( (err, response) => {
      (!err) ? res.send(response) : res.send(err)
    })
  },

  getBlogItem: (req, res, next) => {
    let blogId = req.params.blogId;
    console.log(blogId)
    db.getBlogItem( [blogId],
      (err, response) => {
      (!err) ? res.send(response) : res.send(err);
    })
  }
}
