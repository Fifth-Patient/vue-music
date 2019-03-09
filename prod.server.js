'use strict'

const express = require('express')
const app = express()
const routers = express.Router()
const axios = require('axios')
const config = require('./config')

let port = process.env.PORT || config.build.port

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


app.use('/', express.static('./dist'))

app.use('/api', routers)

module.exports = app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`vue-music's runningn at http://localhost:${port}`)
})
