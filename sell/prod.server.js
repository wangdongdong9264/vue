var express = require('express')
var config = require('./config/index')

var port = process.env.PORT || config.build.port

var app = express()

var router = express.Router()

router.get('/', function (req, ref, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

// 从data.json 中读取数据
var appData = require('./data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

// 定义路由
var apiRoutes = express.Router()
apiRoutes.get('/seller', function (req, res) {
  res.json({
    // errno 开发规范 表示请求数据是正常的s
    errno: 0,
    data: seller
  })
})
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})

apiRoutes.get('/ratings', function (req, res) {
  res.json({
    erron: 0,
    data: retings
  })
})

//使用路由
app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
})
