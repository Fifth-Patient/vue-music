webpackJsonp([4],{NSSj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),o=e("kvay"),r=e("NYxO"),a=e("m40h"),c=e("T452"),u=e("PvFA"),d={created:function(){this._getSongList()},computed:i()({},Object(r.c)(["disc"]),{title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}}),data:function(){return{songs:[]}},methods:{_getSongList:function(){var t=this;this.disc.dissid||this.$router.push("/recommend"),Object(a.c)(this.disc.dissid).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.cdlist[0].songlist))})},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albumid&&n.push(Object(u.a)(t))}),n}},components:{musicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var m=e("VU/8")(d,f,!1,function(t){e("ysLk")},"data-v-5bffec35",null);n.default=m.exports},m40h:function(t,n,e){"use strict";e.d(n,"b",function(){return f}),e.d(n,"a",function(){return m}),n.c=function(t){var n=r()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,format:"json"});return d.a.get("/api/getSongList",{params:n}).then(function(t){return i.a.resolve(t.data)})};var s=e("//Fk"),i=e.n(s),o=e("woOf"),r=e.n(o),a=e("Gak4"),c=e("T452"),u=e("mtWM"),d=e.n(u),f=function(){var t=r()({},c.b,{platform:"h5",uin:0,needNewCode:1,format:"json"});return Object(a.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},m=function(){var t=r()({},c.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return d.a.get("/api/getDiscList",{params:t}).then(function(t){return i.a.resolve(t.data)})}},ysLk:function(t,n){}});
//# sourceMappingURL=4.313f732f50fd096bb70e.js.map