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
  'http://isure.stream.qqmusic.qq.com/C400000GDzSZ0yAEB9.m4a?guid=342833894&vkey=9F5698931B1E1DA0A6B9223D29C6472A27D5687D3BBF7567AE2F5AE30ED051090A3BD8FBF4602B29976C2DFCB2631FCF1AC3EEC6E2FECF4E&uin=0&fromtag=66',
  // 2 MV Let's not fall in love
  'http://isure.stream.qqmusic.qq.com/C4000015STaX0b1FBE.m4a?guid=342833894&vkey=2617F75AA71A11A4B9C7E9D4083D3EEB7549EF41091CC2E27AA6B32D8A9A8CA79AF4C2D25BF6B31B95144B593402DF1B3386CB43156C9693&uin=0&fromtag=66',
  // 3 MV LOSER
  'http://isure.stream.qqmusic.qq.com/C400002HuRZ4120Ght.m4a?guid=342833894&vkey=DA7A011FB0F8FACA06927D608B69FFB2B1DD5E665B6D6C4365B6EF112423A17DD90AB78FED6B2C38F584B78D7B7FE4087EA814338DA56737&uin=0&fromtag=66',
  // 4 MV Fantastic Baby
  'http://isure.stream.qqmusic.qq.com/C4000016j8j527uqHq.m4a?guid=342833894&vkey=D9A866A3D0611B261592BD346C20492EC0CD15E20675902CB6C7A04E4C05C304B35031B6CD1B6E36BC68498F4AEAD063DA3BB9EEDF9C85A8&uin=0&fromtag=66',
  // 5 MV 하루하루 (一天一天)
  'http://isure.stream.qqmusic.qq.com/C400001S0qKq0Vrdw4.m4a?guid=342833894&vkey=0F626B889598BE0128E6CEFAF91A1170558430B4E0928CE9408ED17E3C2D1C228ECC1F9999F0F370F06D165642F04A139C8C258619ADF083&uin=0&fromtag=66'
]

let count = 0

const filerUrl = () => {
  const arrLength = MUSICPLAYURL.length
  const resultUrl = MUSICPLAYURL[count % arrLength]
  count++
  return resultUrl
}
