import { getLyric } from 'api/song'
import { ERR_OK } from 'api/config'
import { Base64 } from 'js-base64'

export default class Song {
  constructor({ id, mid, singer, name, ablum, duration, image, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.ablum = ablum
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then(res => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject(new Error('no lyric'))
        }
      })
    })
  }
}

export const createSong = (musicData, vkey) => {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    ablum: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: filerUrl(),
    tempurl: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?vkey=${vkey}&guid=342833894&uin=0&fromtag=3&=r18486347919424384`
  })
}

const filterSinger = singer => {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(s => {
    ret.push(s.name)
  })
  return ret.join('/')
}

const MUSICPLAYURL = [
  // 1 MV IF YOU
  'http://113.106.207.151/amobile.music.tc.qq.com/C400000GDzSZ0yAEB9.m4a?guid=342833894&vkey=200AE67B812C202489F707E5BE4D27555590EAFCDCDD87AA67F5FB6CE25BA6BE8E794CCC1C4337D4B1C7A17C0C1C23A3958E8EC3D3EC2932&uin=0&fromtag=66',
  // 2 MV Let's not fall in love
  'http://113.106.207.151/amobile.music.tc.qq.com/C4000015STaX0b1FBE.m4a?guid=342833894&vkey=3D134965030EA568A3BF0CDA87295E325583ADFB919FEDE23AC29ACB7E838DD729BC4E7F69755F5B9062C03C160B34EF3C2A2AE5DDD0D9FA&uin=0&fromtag=66',
  // 3 MV LOSER
  'http://113.106.207.151/amobile.music.tc.qq.com/C400002HuRZ4120Ght.m4a?guid=342833894&vkey=FECCB4A9C400F5F3EA76DE639EFF23CD1D3689ABEDB8BB650EC9222F1AFD3D9714B4EA77B9BFAA167D9381A2F1E7728087ED2B45CCD1A5EC&uin=0&fromtag=66',
  // 4 MV Fantastic Baby
  'http://113.106.207.151/amobile.music.tc.qq.com/C4000016j8j527uqHq.m4a?guid=342833894&vkey=60AA8BD78CA42D17067AB8815223D939E120B8930ED0764E48DA302986C744DBCBE2339B7BA794C64C469759E2C00C8CC7922595880E1509&uin=0&fromtag=66',
  // 5 MV 하루하루 (一天一天)
  'http://113.106.207.151/amobile.music.tc.qq.com/C400001S0qKq0Vrdw4.m4a?guid=342833894&vkey=F4F24D62BF6A0144B6625B06AF18300BC61D982632C1A98746B468008BD783AFC20B6DB09059ABDED74608080A7A93C24BF1BA95B8EBA741&uin=0&fromtag=66'
]

let count = 0

const filerUrl = () => {
  const arrLength = MUSICPLAYURL.length
  const resultUrl = MUSICPLAYURL[count % arrLength]
  count++
  return resultUrl
}
