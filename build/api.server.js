'use strict'

const express = require('express')
const app = express()
const routers = express.Router()
const axios = require('axios')
const { apiPort, host } = require('../config/index').dev

// 代理 get: /getDiscList 请求
routers.get('/getDiscList', (req, res) => {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.error(e)
  })

})

// 代理 get: /lyric 请求
routers.get('/getLyric', (req, res) => {
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then(response => {
    let ret = response.data
    if (typeof ret === 'string') {
      let reg = /^\w+\(({[^()]+})\)$/
      let methes = ret.match(reg)
      if (methes) {
        ret = JSON.parse(methes[1])
      }
    }
    res.json(ret)
  }).catch(e => {
    console.error(e)
  })

})

// 代理 get: /getDiscList 请求
routers.get('/getSongList', (req, res) => {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.error(e)
  })

})

app.use('/api', routers)
// 代理 get: /getSearch 请求
routers.get('/getSearch', (req, res) => {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.error(e)
  })

})

app.use('/api', routers)

// 导出对象
app.exports = app => {
  module.exports = app
}

// 监听端口
app.listenPort = (port, host) => {
  app.listen(port, host, err => {
    if (err) {
      console.error(err)
    }
    console.log(`Example app listening on port http://localhost:${port}!`)
  })
}

if (module.parent) {
  // console.log('apiServer被require')
  // 导出app对象，外部listen端口
  app.exports(app)
} else {
  // console.log('apiServer没有require')
  // 没有require，那就自己监听一个端口
  app.listenPort(apiPort, host)
}
