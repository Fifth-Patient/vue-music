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
  'http://dl.stream.qqmusic.qq.com/C400000GDzSZ0yAEB9.m4a?guid=2011413128&vkey=15A3DFAB5EA40CBC7C0455B8E56B8C4DBBFEF0B312F065FA2E6A8E290FE97290017ECEB0E800E803CD7AC1537C41F1415ED719C34F5DD364&uin=0&fromtag=66',
  'http://dl.stream.qqmusic.qq.com/C4000015STaX0b1FBE.m4a?guid=2011413128&vkey=3CA9AC55FD304F28C5441251A2107B4E081A4013479C64F3BD9CA7714E4647207EB6FF8093A3108701A3E93314F3088C89DB4577F0CB575F&uin=0&fromtag=66',
  'http://dl.stream.qqmusic.qq.com/C400002HuRZ4120Ght.m4a?guid=2011413128&vkey=37EC3D1ADD984284F7AFFCACAC4BE878BC65D250960779C0F4D0F76C6E6D8EBCA7FCB70212C46F770A8A34C0C73FFC855FA8B0BA10C26E6C&uin=0&fromtag=66',
  'http://dl.stream.qqmusic.qq.com/C4000016j8j527uqHq.m4a?guid=2011413128&vkey=D5AA6EF0E03A55F1B97CB9D537F5DFE04C057BCFAD0E6E0556851756F0D417181F376A50631B7BC8670C22B3EB4E394B3269B1B64AEA5EB6&uin=0&fromtag=66',
  'http://dl.stream.qqmusic.qq.com/C400001S0qKq0Vrdw4.m4a?guid=2011413128&vkey=787A06B316162F2078B17D679D99FE1222767B5A7F979F65A52BB079957D7C9289D49234A2E84807325D22CBF65649072E38430666DDD66D&uin=0&fromtag=66'
]

let usefilerUrlCurrent = -1

const filerUrl = () => {
  if (usefilerUrlCurrent < MUSICPLAYURL.length - 1) {
    usefilerUrlCurrent++
    return MUSICPLAYURL[usefilerUrlCurrent]
  }
  const minIndex = 0
  const maxIndex = MUSICPLAYURL.length - 1
  const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex)
  return MUSICPLAYURL[randomIndex]
}