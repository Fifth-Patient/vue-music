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
    url: `http://183.232.248.19/amobile.music.tc.qq.com/C4000039MnYb0qxYhV.m4a?guid=342833894&vkey=2A7E84811DB4BE4417EAF4964A9A59FC3E25D9A04E80E7A6831E8FED09DD7464C1B7A9494256FF72EEB41A944A52C340E86B6B1314DE1C8B&uin=0&fromtag=66`,
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
