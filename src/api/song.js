import { jsonp } from 'common/js/jsonp'
import { commonParams } from './config'

export const getSongVkey = (songmid) => {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'

  const data = Object.assign({}, commonParams, {
    songmid: songmid,
    filename: `C100${songmid}.m4a`,
    guid: '7981028948',
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    cid: '205361747',
    uid: 0,
    g_tk: 1928111839
  })

  return jsonp(url, data)
}
