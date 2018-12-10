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
  'http://113.96.98.142/amobile.music.tc.qq.com/C400000GDzSZ0yAEB9.m4a?guid=342833894&vkey=E29BCFBBA8805BD43837F15B5763FE387812AD7830B72F4A13CD1FE1796565C1E71FB5495741DA54ADDDFF60810B3140D2143B2C692EDF1C&uin=0&fromtag=66',
  // 2 MV Let's not fall in love
  'http://113.96.98.142/amobile.music.tc.qq.com/C4000015STaX0b1FBE.m4a?guid=342833894&vkey=18E7E87807B10433E2278B20A2BEB5F4326A3C72BDEBC3742408F1607EC9F21C5B02FE8CD08F5D9D8EC525A4EA091FFA9A58E8FA79592FF0&uin=0&fromtag=66',
  // 3 MV LOSER
  'http://113.96.98.142/amobile.music.tc.qq.com/C400002HuRZ4120Ght.m4a?guid=342833894&vkey=87BE75EF330AE1A17F60ED00CA18FB23ED95BC1897C3B67B6C404885F19CFB20E693CC45DFF0C0684AE778B07D11B8D2D508210CA91D866A&uin=0&fromtag=66',
  // 4 MV Fantastic Baby
  'http://113.96.98.142/amobile.music.tc.qq.com/C4000016j8j527uqHq.m4a?guid=342833894&vkey=E9995B9BAF813030BC986CE6A6339F221D2BA67875E59282953D0ED0C9430856206B2E6928ED8DCCB5CF33BEA90AE63BE2F403B24609A52E&uin=0&fromtag=66',
  // 5 MV 하루하루 (一天一天)
  'http://113.96.98.142/amobile.music.tc.qq.com/C400001S0qKq0Vrdw4.m4a?guid=342833894&vkey=60B98BB6AF0A0E26E81B9329AAA6218D2893726924E6B13E1ACD71B239CE89B19F80DF55E965FF0CD85D92ED3ECBE45404C288CAB36FDC72&uin=0&fromtag=66'
]

let count = 0

const filerUrl = () => {
  const arrLength = MUSICPLAYURL.length
  const resultUrl = MUSICPLAYURL[count % arrLength]
  count++
  return resultUrl
}
